const uuidv4 = require('uuid/v4');
const db = require('../db/index');

module.exports = {
  create(req, res) {
    const { username, roomID } = req.body;
    console.log('req.body ', req.body);
    db.query(`SELECT * FROM "user" WHERE room='${roomID}'`)
      .then((result) => {
        console.log('result is ', result.rows);
        const [blue, red] = result.rows.reduce((acc, row) => {
          console.log('row.team ', row.team);
          if (row.team === 'blue') acc[0] += 1;
          else acc[1] += 1;
          return acc;
        }, [0, 0]);
        let team;
        const spymaster = !!(red === 0 || blue === 0);
        const userID = uuidv4();
        if (blue > red) team = 'red';
        else if (red === blue) team = 'blue';
        console.log('spymaster ', spymaster);
        console.log('userID ', userID);
        db.query('INSERT INTO "user"(id, room, username, spymaster, team, ready) VALUES($1, $2, $3, $4, $5, $6)', [userID, roomID, username, spymaster, team, false])
          .then((r) => {
            console.log('insert user result ', r);
            res.status(200).json({ message: 'Successfully added user' });
          })
          .catch((err) => {
            console.log('insert user error ', err);
          });
      })
      .catch((err) => {
        console.log('error selecting users ', err);
      });
    // db.query('INSERT INTO "user"(username, session_id, spymaster) VALUES($1, $2)', ['idle', sessionID])
  },
};
