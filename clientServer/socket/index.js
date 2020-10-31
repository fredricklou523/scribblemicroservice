var express = require("express");
var app = express();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

module.exports = {
  http,
  app,
  io,
  express,
};
