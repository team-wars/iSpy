const express = require('express');
const app = express();

const PORT = 3000;

// /
// /api/session/new
// /api/session/join/:sessionid
// /api/game/pick-team
// /api/game/start
// /api/game/clue
// /api/game/pick-tile

app.listen(PORT, ()=> console.log(`Started listening to port ${PORT}`));