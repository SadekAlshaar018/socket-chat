var express = require('express');

var socket = require('socket.io');

//App setup
var app = express();

var server = app.listen(4000, function(req,res){
  console.log('we listen to 4000');
});


//statice file
app.use(express.static('public'));

//socket setup

var io = socket(server);

io.on('connection',  (socket) => {
  console.log('made a socket', socket.id);

//handle event message
  socket.on('chat',  (data) => {
    io.sockets.emit('chat', data);
  });
  socket.on('typing',  (data) => {
    socket.broadcast.emit('typing', data);
  });
});
