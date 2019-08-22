const sockets = require('socket.io');
const uuidv4 = require('uuid/v4');
const db = require('./db/index');
const { populateBoard } = require('./controllers/gameSocketController');

module.exports = {
  init(server) {
    const io = sockets(server);
    io.on('connection', (socket) => {
      const room = socket.handshake.query.r_var;
      socket.join(room);
      socket.on('join session', (username) => {
        console.log('recieved from client: ', username, room);

        db.query(`SELECT * FROM "user" WHERE room='${room}'`)
          .then((result) => {
            const [blue, red] = result.rows.reduce((acc, row) => {
              if (row.team === 'blue') acc[0] += 1;
              else acc[1] += 1;
              return acc;
            }, [0, 0]);
            let team;
            const spymaster = !!(red === 0 || blue === 0);
            const userID = uuidv4();
            if (blue > red) team = 'red';
            else team = 'blue';
            db.query('INSERT INTO "user"(id, room, username, spymaster, team, ready) VALUES($1, $2, $3, $4, $5, $6)', [userID, room, username, spymaster, team, false])
              .then(() => {
                io.to(room).emit('joined', {
                  user: {
                    username, isSpyMaster: spymaster, ready: false,
                  },
                  teamKey: `${team}Team`,
                });
              })
              .catch((err) => {
                console.log('insert user error ', err);
              });
          })
          .catch((err) => {
            console.log('error selecting users ', err);
          });
      });
      socket.on('ready', (username) => {
        console.log('recieved from client for ready up: ', username, room);
        db.query(`UPDATE "user" SET ready=(CASE WHEN ready=true THEN false ELSE true END) WHERE room='${room}' AND username='${username}' RETURNING ready`)
          .then((data) => {
            io.to(room).emit('ready changed', { username, ready: data.rows[0].ready });
          });
      });
      socket.on('message', ({ text, username }) => {
        db.query('INSERT INTO messages(room, username, text) VALUES($1, $2, $3)', [room, username, text])
          .then(() => io.to(room).emit('new message', { username, text }))
          .catch((err) => console.log('error inserting message to DB: ', err));
      });
      socket.on('tile clicked', ({ affiliation, boardLocation, sessionID }) => {
        // DB query
        console.log('inside tile picked action, in backend');
        db.query(`UPDATE board SET selected=true WHERE room='${sessionID}' AND location=${boardLocation}`)
          .then((res) => {
            console.log('changed word status: ', res);
            io.to(room).emit('tile selected', ({ affiliation, boardLocation, sessionID }));
          })
          .catch((err) => console.log('error in updating tile: ', err));
      });
      socket.on('request new board', ({ sessionID: session_id }) => {
        console.log('in request new board socket action');

        // generate 25 unique word ids

        const ids = [];

        while (ids.length < 25) {
          const id = Math.ceil(Math.random() * 100);
          if (ids.includes(id)) continue;
          else ids.push(id);
        }
        // join array into string of ids
        const idString = ids.join(', ');

        // pull words from SQL
        db.query(`SELECT * FROM dictionary WHERE id in (${idString})`, (err, result) => {
          if (err) {
            console.log('error picking words for socket req: ', err);
            return;
          }
          // iterate through result and create array of word object
          const wordArray = [];
          result.rows.forEach((foundWord, i) => {
            // assign affliation
            let affiliation;
            if (i === 0) affiliation = 'assassin';
            else if (i >= 1 && i <= 7) affiliation = 'neutral';
            else if (i >= 8 && i <= 16) affiliation = 'blue';
            else if (i >= 17) affiliation = 'red';

            const wordObj = {
              ...foundWord,
              affiliation,
              selected: false,
            };
            wordArray.push(wordObj);
          });

          // randomize words in the word array
          function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i -= 1) {
              const j = Math.floor(Math.random() * (i + 1));
              const temp = array[i];
              array[i] = array[j];
              array[j] = temp;
            }
          }
          shuffleArray(wordArray);

          // add location to word obj and build up sql string for insertion with one query
          let sqlValues = '';
          wordArray.forEach((word, i) => {
            word.location = i;
            sqlValues += `(${word.id}, '${word.affiliation}', ${word.selected}, '${session_id}', ${word.location})`;
            // add comma if it's NOT the last item in the array
            if (i !== 24) { sqlValues += ','; }
          });

          // put words in board table
          db.query(`INSERT INTO board (word_id,affiliation,selected,room,location) VALUES ${sqlValues}`, (error, ressy) => {
            if (error) {
              console.log('error in inserting words into board table ', error);
              return;
            }
            console.log(ressy);

            console.log('word array sent back: ', wordArray);
            // send back wordArray of objects, to frontend
            io.to(room).emit('board populated', ({ newBoard: wordArray }));
          });
        });
      });
    });
    server.listen(3000, () => console.log('Listening on port 3000'));
  },
};
