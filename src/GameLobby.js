import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import socketIOClient from "socket.io-client";
import ChatRoom from "./ChatRoom.js";
import UserName from "./UserName.js";
import Events from "../lib/enums/events";

const ENDPOINT = "http://localhost:3000";

function GameLobby() {
  const [socket, connectSocket] = useState();
  const [lobbyName] = useState(useParams().lobbyName);
  const [userName, setUserName] = useState();

  function submitUserNameAndConnect(userName) {
    connectSocket(socketIOClient(ENDPOINT));
    setUserName(userName);
  }

  useEffect(() => {
    console.log(Events);
    if (socket && userName) {
      socket.on("connect", () => {
        socket.emit(Events.JOIN_LOBBY, { lobbyName, userName });
      });
    }
  });

  return (
    <div>
      <h3>ID:, {lobbyName}</h3>
      <UserName
        userName={userName}
        submitUserNameAndConnect={submitUserNameAndConnect}
      />
      {socket && <ChatRoom socket={socket} />}
    </div>
  );
}

export default GameLobby;
