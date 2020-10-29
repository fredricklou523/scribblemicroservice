import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import socketIOClient from "socket.io-client";
import ChatRoom from "./ChatRoom.js";

const ENDPOINT = "http://localhost:3000";

function GameLobby() {
  const [lobbyName] = useState(useParams().lobbyName);
  const [announcement, updateAnnouncement] = useState(false);

  const socket = socketIOClient(ENDPOINT);
  socket.on("connect", () => {
    socket.emit("joinLobby", lobbyName);
  });

  return (
    <div>
      <h3>ID:, {lobbyName}</h3>
      <ChatRoom socket={socket} />
    </div>
  );
}

export default GameLobby;
