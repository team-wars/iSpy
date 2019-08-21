// const express = require('express');
const path = require('path');
// const sassMiddleware = require('node-sass-middleware');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const apiRouter = require('./routers/apiRouter');

const app = express();
const server = http.Server(app);
const io = socketIO(server);
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


app.use(express.json());
app.use('/build', express.static(path.join(__dirname, '..', '..', 'build')));
app.use('/api', apiRouter);
app.get('/', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../client/index.html')));

io.on('connection', (socket) => {
  const room = socket.handshake.query.r_var;
  socket.join(room);
  socket.on('join session', (user) => {
    console.log('recieved from client: ', user, room);
    io.to(room).emit('joined', `${user} has joined room ${room}!`);
  });

});
server.listen(PORT, () => console.log(`Started listening to port ${PORT}`));
