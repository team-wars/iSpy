const sockets = require('socket.io');
const uuidv4 = require('uuid/v4');
const db = require('./db/index');

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
            else if (red === blue) team = 'blue';
            db.query('INSERT INTO "user"(id, room, username, spymaster, team, ready) VALUES($1, $2, $3, $4, $5, $6)', [userID, room, username, spymaster, team, false])
              .then(() => {
                io.to(room).emit('joined', {
                  username, isSpyMaster: spymaster, team, ready: false,
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
    });
    server.listen(3000, () => console.log('Listening on port 3000'));
  },
};
