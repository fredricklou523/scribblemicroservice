var express = require('express');
var app = express();
var http = require('http').createServer(app);
var path = require("path");
var io = require('socket.io')(http);


app.use(express.static(path.join(__dirname, '../dist')));

io.on('connection', (socket) => {
  console.log('a user connected ', socket.id);

  socket.on("mouse", function(data) {
    console.log("Received: 'mouse' " + data.x + " " + data.y);
    socket.broadcast.emit('mouse', data);
  })

});

http.listen(3000, () => {
  console.log('listening on *:3000');
});