const db = require('../db/index');

const genRoomID = () => {
  const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  for (let i = 4; i > 0; i -= 1) result += chars[Math.floor(Math.random() * chars.length)];
  return result;
};

module.exports = {
  create(req, res) {
    // changing query to find most recent ID and adding to the corresponding room
    // ideally would change room column to be by INT, not by VARCHAR(4)
    db.query('SELECT * FROM session ORDER BY id DESC LIMIT 1')
      .then((data) => {
        console.log('new session data ', data);
        console.log('type of data ', typeof data);
        console.log('data.rows ', data.rows);
        // let roomID;
        // let isUnique = false;
        // while (!isUnique) {
        //     roomID = genRoomID();
        //     isUnique = data.rows.includes(roomID);
        // }
        let roomID;
        if (!data.rows.length) roomID = 1;
        else roomID = Number(data.rows[0].room) + 1;
        console.log('roomID ', roomID);
        db.query('INSERT INTO session(status, room) VALUES($1, $2)', ['idle', roomID])
          .then((result) => {
            console.log('result: ', result);
            res.locals.newRoom = roomID;
            res.status(200).json({ roomID });
          })
          .catch(err => console.log('error inserting session: ', err));
      })
      .catch(err => console.log('Error selecting from session: ', err));
  },
};
