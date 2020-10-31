import React, { useState, useEffect } from "react";

function ChatRoom({ socket }) {
  const [messages, addMessages] = useState([]);

  socket.on("message", (message) => {
    addMessages(messages.concat(message));
  });
  return (
    <div>
      {messages.map((message) => {
        return <div key={message}>{message}</div>;
      })}
    </div>
  );
}

export default ChatRoom;
