const User = require("./User");
const Events = require("../enums/events");
const { io } = require("../../clientServer/socket");

class Lobby {
  constructor(lobbyName) {
    this.lobbyName = lobbyName;
    this.users = {};
    this.totalRounds = 3;
    this.currentRound = 1;
    this.roundTimer = 30;
    this.currentDrawer = 0; //index
  }

  //reducing timer
  roundTimer() {
    setInterval(() => {
      this.roundTimer -= 1;
      let target = this.lobbyName;
      let message = { timeLeft: this.roundTimer };
      let event = Events.ROUND_TIMER;
      this.emitEvent(target, message, event);
    }, 1000);
  }

  addUser(userData) {
    const { userName, userId } = userData;
    let message,
      target,
      event = Events.MESSAGES;

    if (!this.users[userName]) {
      console.log("user doesn't exist");
      this.users[userName] = new User(userName, userId);
      console.log(this.users);
      message = `${userName} has joined the lobby yo`;
      target = this.lobbyName;
    } else {
      console.log("user exist");
      message = `${userName} already taken buddy, try again`;
      target = userId;
    }
    console.log("users :", this.users);
    this.emitEvent(target, message, event);
  }
  emitEvent(target, message, event) {
    io.to(target).emit(event, message);
  }
}

module.exports = Lobby;
