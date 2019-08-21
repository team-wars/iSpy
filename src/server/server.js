// const express = require('express');
const path = require('path');
// const sassMiddleware = require('node-sass-middleware');
const express = require('express');
const http = require('http');
const sockets = require('./sockets');
const apiRouter = require('./routers/apiRouter');

const app = express();
const server = http.Server(app);
// const io = socketIO(server);
// const PORT = 3000;

app.use(express.json());
app.use('/build', express.static(path.join(__dirname, '..', '..', 'build')));
app.use('/api', apiRouter);
app.get('/', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../client/index.html')));

sockets.init(server);
