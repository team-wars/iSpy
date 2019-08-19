const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000;


// app.use('/static', express.static(path.join(__dirname, '../build')));


app.get('/', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../client/index.html')));
// res.send('hello world');
// /api/session/new
// /api/session/join/:sessionid
// /api/game/pick-team
// /api/game/start
// /api/game/clue
// /api/game/pick-tile

app.listen(PORT, () => console.log(`Started listening to port ${PORT}`));
