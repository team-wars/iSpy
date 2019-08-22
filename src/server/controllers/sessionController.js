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
};
