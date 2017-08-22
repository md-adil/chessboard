const express = require('express'),
  app = express(),
  server = require('http').Server(app),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  io = require('socket.io')(server);

app.use(express.static('public'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.text())

app.post('/', (req, res) => {
  io.emit('position', req.body);
  res.send('ok');
});

app.post('/move', (req, res) => {
  io.emit('move', req.body);
  res.send('ok');
})

app.post('/start', (req, res) => {
  io.emit('start');
  res.send('ok');
})

app.post('/clear', (req, res) => {
  io.emit('clear');
  res.send('ok');
})

server.listen(3000, () => {
  console.log('Server is listening on: ', 3000)
});
