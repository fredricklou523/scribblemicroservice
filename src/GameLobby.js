import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:3000";

function GameLobby() {
  const [response, setResponse] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", (data) => {
      setResponse(data);
    });
  }, []);

  return (
    <div>
      <h3>
        ID:, {id}, {response}
      </h3>
    </div>
  );
}

export default GameLobby;
