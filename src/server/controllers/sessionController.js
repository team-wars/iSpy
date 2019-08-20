const db = require('../db/index');

const genRoomID = () => {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let result = '';
    for (var i = 4; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
};

module.exports = {
    create(req, res) {
        db.query('SELECT * FROM session')
            .then(data => {
                 
              
                const cache = {};
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
                    .then(result => console.log('result: ', result))
                    .catch(err => console.log('error inserting session: ', err));

            })
            .catch(err => console.log('Error selecting from session: ', err));

    }
}