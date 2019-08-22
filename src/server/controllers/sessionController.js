const db = require('../db/index');

const genRoomID = () => {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let result = '';
    for (var i = 4; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
};

const cache = {};
module.exports = {
  create(req, res) {
    console.log(cache)
    if (Object.keys(cache).length === 0) {
        db.query('SELECT * FROM session')
            .then(data => {
                  for (let row of data.rows) {
                      const room = row.room;
                      cache[room] = true;
                  }
                
                
                let roomID = genRoomID();
                while (roomID in cache) {
                    roomID = genRoomID();
                }
                
                console.log('roomID ', roomID)
                db.query('INSERT INTO session(status, room) VALUES($1, $2)', ['idle', roomID])
                  .then(result => {
                    console.log('result: ', result)
                    return res.status(200).json({ roomID})
                  })
                    .catch(err => console.log('error inserting session: ', err));

            })
        .catch(err => console.log('Error selecting from session: ', err));
    } else {
      // console.log(cache);
      let roomID = genRoomID();
                while (roomID in cache) {
                    roomID = genRoomID();
                    console.log('roomID ', roomID)
                }
                db.query('INSERT INTO session(status, room) VALUES($1, $2)', ['idle', roomID])
                  .then(result => {
                    console.log('result: ', result)
                    return res.status(200).json({ roomID})
                  })
                  .catch(err => console.log('error inserting session: ', err));
    }

    }
}