import React, { useState, useEffect } from "react";

function ChatRoom(props) {
  const [messages, addMessages] = useState([]);
  console.log(props);

  props.socket.on("message", (message) => {
    addMessages(messages.concat(message));
  });
  return (
    <div>
      {messages.map((message) => {
        return <div>{message}</div>;
      })}
    </div>
  );
}

export default ChatRoom;
