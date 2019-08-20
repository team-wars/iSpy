const db = require('./db/index');

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
                console.log(data);
                console.log(typeof data);
                let roomID;
                let isUnique = false;
                while (!isUnique) {
                    roomID = genRoomID();
                    isUnique = data.includes(roomID);
                }
                db.query('INSERT INTO session(satus, room) VALUES($1, $2)', ['idle', roomID])
                    .then(result => console.log('result: ', result))
                    .catch(err => console.log('error inserting session: ', err));

            })
            .catch(err => console.log('Error selecting from session: ', err));

    }
}