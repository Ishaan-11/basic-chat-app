const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

app.get('/', (req, res) => {
  res.send('<h1>Basic Chat App</h1>');
});

server.listen(3000, () => {
  console.log('listening at *:3000');
});