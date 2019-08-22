const uuidv4 = require('uuid/v4');
const db = require('../db/index');

const genRoomID = () => {
  const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  for (let i = 4; i > 0; i -= 1) result += chars[Math.floor(Math.random() * chars.length)];
  return result;
};

const cache = {};
module.exports = {
  create(req, res) {
    const { username } = req.body;
    if (Object.keys(cache).length === 0) {
      db.query('SELECT * FROM session')
        .then((data) => {
          data.rows.forEach(({ room }) => { cache[room] = true; });
          let roomID = genRoomID();
          while (roomID in cache) {
            roomID = genRoomID();
          }

          console.log('roomID ', roomID);
          db.query('INSERT INTO session(status, room) VALUES($1, $2)', ['idle', roomID])
            .then(() => {
              // console.log('result: ', result);
              const userID = uuidv4();
              db.query('INSERT INTO "user"(id, room, username, spymaster, team, ready) VALUES($1, $2, $3, $4, $5, $6)', [userID, roomID, username, true, 'blue', false])
                .then((re) => {
                  console.log('insert user result ', re);
                  return res.status(200).json({ roomID });
                })
                .catch((err) => {
                  console.log('insert user error ', err);
                });
            })
            .catch((err) => console.log('error inserting session: ', err));
        })
        .catch((err) => console.log('Error selecting from session: ', err));
    } else {
      // console.log(cache);
      let roomID = genRoomID();
      while (roomID in cache) {
        roomID = genRoomID();
        console.log('roomID ', roomID);
      }
      db.query('INSERT INTO session(status, room) VALUES($1, $2)', ['idle', roomID])
        .then(() => {
          // console.log('result: ', result);
          const userID = uuidv4();
          db.query('INSERT INTO "user"(id, room, username, spymaster, team, ready) VALUES($1, $2, $3, $4, $5, $6)', [userID, roomID, username, true, 'blue', false])
            .then((re) => {
              console.log('insert user result ', re);
              return res.status(200).json({ roomID });
            })
            .catch((err) => {
              console.log('insert user error ', err);
            });
        })
        .catch((err) => console.log('error inserting session: ', err));
    }
  },
  getData(req, res) {
    const room = req.url.split('=')[1];
    console.log(room);
    const queryArr = [
      db.query(`SELECT board.selected,board.affiliation,board.location,dictionary.word
      FROM board
      INNER JOIN dictionary
      ON board.word_id = dictionary.id
      WHERE board.room='${room}'
      ORDER BY board.location ASC`),
      db.query(`SELECT * FROM messages WHERE room='${room}'`),
      db.query(`SELECT * FROM "user" WHERE room='${room}'`),
      db.query(`SELECT * FROM session WHERE room='${room}'`),
    ];
    Promise.all(queryArr)
      .then((data) => {
        // const rows = data.map((cv) => cv.rows);
        const toSend = {
          redTeam: data[2].rows.filter((cv) => cv.team === 'red').map((cv) => ({ username: cv.username, spymaster: cv.spymaster, ready: cv.ready })),
          blueTeam: data[2].rows.filter((cv) => cv.team === 'blue').map((cv) => ({ username: cv.username, spymaster: cv.spymaster, ready: cv.ready })),
          messages: data[1].rows.map((cv) => ({ user: cv.username, text: cv.text })),
          gameBoard: data[0].rows,
        };
        // console.log(toSend);
        return res.status(200).json(toSend);
      })
      .catch((err) => console.log('error in getDATA: ', err));
  },
};
