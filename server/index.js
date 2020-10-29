var express = require("express");
var app = express();
var http = require("http").createServer(app);
var path = require("path");
var io = require("socket.io")(http);

app.use(express.static(path.join(__dirname, "../dist")));

let interval;

const getApiAndEmit = (socket) => {
  const response = new Date();
  // Emitting a new message. Will be consumed by the client
  socket.emit("FromAPI", response);
};

io.on("connection", (socket) => {
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });

  // console.log("a user connected ", socket.id);

  // socket.join("Fred's Room", () => {
  //   let rooms = Object.keys(socket.rooms);
  //   console.log(rooms);
  //   io.to("room 237").emit("a new user has joined the room");
  //   socket.on("mouse", function (data) {
  //     console.log("Received: 'mouse' " + data.x + " " + data.y);
  //     socket.broadcast.emit("mouse", data);
  //   });
  // });
});

http.listen(3000, () => {
  console.log("listening on *:3000");
});
