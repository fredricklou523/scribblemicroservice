class User {
  constructor(userName, userId) {
    this.userName = userName;
    this.userId = userId;
    this.currentScore;
    this.currentGuess;
    this.guessedCorrectly;
  }
}

module.exports = User;
