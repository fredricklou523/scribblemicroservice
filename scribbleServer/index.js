var express = require("express");
var app = express();
var http = require("http").createServer(app);
var path = require("path");
var io = require("socket.io")(http);

app.use(express.static(path.join(__dirname, "../dist")));

io.on("connection", (socket) => {
  console.log("New client connected");

  socket.join("Fred's Room", () => {
    let rooms = Object.keys(socket.rooms);
    console.log(rooms);
    io.to("room 237").emit("a new user has joined the room");
    socket.on("mouse", function (data) {
      console.log("Received: 'mouse' " + data.x + " " + data.y);
      socket.broadcast.emit("mouse", data);
    });
  });
});

http.listen(8080, () => {
  console.log("listening on *:8080");
});
