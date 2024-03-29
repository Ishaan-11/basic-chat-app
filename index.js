const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

app.use(express.static("public"));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

io.on('connection', socket => {
  socket.broadcast.emit('user joined','a user joined');

  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  })

  socket.on('disconnect', () => {
    socket.broadcast.emit('user left','a user left');
  });
});

server.listen(3000, () => {
  console.log('listening at *:3000');
});