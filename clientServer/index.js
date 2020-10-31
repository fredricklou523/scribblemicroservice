const path = require("path");
const { http, io, app, express } = require("./socket");
const { Lobby } = require("../lib");
const Events = require("../lib/enums/events");

app.use(express.static(path.join(__dirname, "../dist")));

const lobbies = {};

io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on(Events.JOIN_LOBBY, function (options) {
    const { lobbyName, userName } = options;
    const userId = socket.id;
    if (!socket.adapter.rooms[lobbyName]) {
      console.log("new Lobby");
      lobbies[lobbyName] = new Lobby(lobbyName, io);
    }
    socket.join(lobbyName, () => {
      const currentLobby = lobbies[lobbyName];
      currentLobby.addUser({ userName, userId });
    });
  });

  socket.on(Events.START_ROUND, function () {});
});

http.listen(3000, () => {
  console.log("listening on *:3000");
});
