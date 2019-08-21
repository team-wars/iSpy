const express = require('express');
const path = require('path');
const apiRouter = require('./routers/apiRouter');
// const sassMiddleware = require('node-sass-middleware');
const app = express();
const PORT = 3000;


// app.use(sassMiddleware({
//   /* Options */
//   src: path.join(__dirname, '../stylesheet'),
//   dest: path.join(__dirname, 'build'),
//   debug: true,
//   outputStyle: 'compressed',
//   indentedSyntax: false,
//   prefix: '/stylesheet', // Where prefix is at <link rel="stylesheets" href="prefix/style.css"/>
// }), express.static(path.join(__dirname, 'build')));


app.use('/static', express.static(path.join(__dirname, '../build')));
app.use(express.json());

app.use('/api', apiRouter);
app.get('/', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../client/index.html')));

// res.send('hello world');
// /api/session/new
// /api/session/join/:sessionid
// /api/game/pick-team
// /api/game/start
// /api/game/clue
// /api/game/pick-tile

app.listen(PORT, () => console.log(`Started listening to port ${PORT}`));
