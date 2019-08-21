const express = require('express');
const path = require('path');
const db = require('./db/index');

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const PORT = 3000;

app.use('/static', express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../client/index.html')));
// res.send('hello world');
// /api/session/new
// /api/session/join/:sessionid
// /api/game/pick-team
// /api/game/start
// /api/game/clue
// /api/game/pick-tile
io.on('connection', function(socket){
  socket.broadcast.emit('user connected');
  socket.on('msg',function(msg){
    socket.broadcast.emit(`msg sent is ${msg}`)
  })
  socket.on('disconnect', function(){
    socket.broadcast.emit('a user disconnected!');
  })
});
http.listen(PORT, function(){
  console.log('listening on *:3000');
});
// app.listen(PORT, () => console.log(`Started listening to port ${PORT}`));
