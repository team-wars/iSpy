const db = require('./db/index');
const uuidv4 = require('uuid/v4');

module.exports = {
    create(req, res) {
        const { username, roomID } = req.body;
        db.query(`SELECT * FROM "user" WHERE room=${roomID}`)
            .then(result => {
                const [blue, red] = result.reduce((acc, row) => {
                    if (row.team === 'blue') acc[0] += 1;
                    else acc[1] += 1;
                }, [0, 0]);
                let team;
                const spymaster = red === 0 || blue === 0 ? true : false;
                const userID = uuidv4();
                if (blue > red) team = 'red';
                else if (red === blue) team = 'blue';
                db.query(`INSERT INTO "user"(id, room, username, spymaster, team, ready) VALUES($1, $2, $3, $4, $5, $6)`, [userID, roomID, username, spymaster, team, false])
                    .then((result) => {
                        console.log('insert user result ', result)
                    })
                    .catch(err => {
                        console.log('insert user error ', err);
                    });
            })
            .catch(err => {
                console.log('error selecting users ', error);
            });
        // db.query('INSERT INTO "user"(username, session_id, spymaster) VALUES($1, $2)', ['idle', sessionID])
    }
}