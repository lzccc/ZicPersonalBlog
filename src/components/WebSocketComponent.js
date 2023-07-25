import React, { useEffect, useState, useContext, useRef } from "react";
import Stomp from "stompjs";
import SockJS from "sockjs-client";
import { AuthContext } from "@/src/components/AuthContext";
import strings from "@/src/utils/globalString";

const WebSocketComponent = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const { username, password } = useContext(AuthContext);
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      const socket = new SockJS(`${strings.serverURL}/api/websocket`);
      const stompClient = Stomp.over(socket);

      stompClient.connect({}, () => {
        // Subscribe to messages
        stompClient.subscribe(`/api/topic/messages`, (response) => {
          const message = response.body;
          console.log(messages);
          setMessages((preMessages) => [...preMessages, message]);
        });
      });
    }
  }, []);

  const handleMessageChange = (e) => {
    setInputMessage(e.target.value);
  };

  const sendMessage = () => {
    // Create a message object to send
    const message = {
      content: inputMessage,
      // You can add more fields to the message object as needed
    };

    // Send the message to the backend
    fetch(`${strings.serverURL}/api/send-message`, {
      method: "POST",
      headers: {
        Authorization: "Basic " + btoa(username + ":" + password),
        "Content-Type": "text/plain",
      },
      body: JSON.stringify(message),
    }).then((response) => {
      if (response.ok) {
        console.log("Message sent successfully!");
      } else {
        console.error("Failed to send message.");
      }
    });

    // Clear the input field after sending the message
    setInputMessage("");
  };

  return (
    <div>
      <h2>WebSocket Messages:</h2>

      {messages.map((message, index) => (
        <div>{message}</div>
      ))}

      <div>
        <input
          type="text"
          value={inputMessage}
          onChange={handleMessageChange}
        />
        <button onClick={sendMessage}>Send Message</button>
      </div>
    </div>
  );
};

export default WebSocketComponent;
