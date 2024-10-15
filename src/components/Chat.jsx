/*// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, TextField, Typography } from "@mui/material";
import { sendMessage, receiveMessage } from "../redux/chatSlice";

const Chat = () => {
  const [message, setMessage] = useState("");
  const messages = useSelector((state) => state.chat.messages);
  const dispatch = useDispatch();
  const chatRef = useRef(null);
  const incomingMessageTimeout = useRef(null); // Ref for the timeout

  useEffect(() => {
    // Scroll to the bottom on new message
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    const simulateIncomingMessage = () => {
      incomingMessageTimeout.current = setTimeout(() => {
        dispatch(
          receiveMessage({
            content: "Hello there!",
            user: "Bot",
            timestamp: new Date().toLocaleTimeString(),
          })
        );
      }, 3000);
    };

    simulateIncomingMessage();

    // Cleanup function to prevent duplicate messages
    return () => {
      if (incomingMessageTimeout.current) {
        clearTimeout(incomingMessageTimeout.current);
      }
    };
  }, [dispatch]);

  const handleSendMessage = () => {
    if (message.trim()) {
      dispatch(
        sendMessage({
          content: message,
          user: "You",
          timestamp: new Date().toLocaleTimeString(),
        })
      );
      setMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage(); // Trigger send message when Enter is pressed
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        maxWidth: "500px",
        margin: "0 auto",
      }}
    >
      <Box
        ref={chatRef}
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          padding: "1rem",
          border: "1px solid #ccc",
        }}
      >
        {messages.map((msg, idx) => (
          <Box key={idx} sx={{ marginBottom: "1rem" }}>
            <Typography variant="subtitle2" color="textSecondary">
              {msg.user} - {msg.timestamp}
            </Typography>
            <Typography>{msg.content}</Typography>
          </Box>
        ))}
      </Box>
      <Box
        sx={{ display: "flex", padding: "1rem", borderTop: "1px solid #ccc" }}
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress} // Listen for key press event
        />
        <Button
          onClick={handleSendMessage}
          variant="contained"
          sx={{ marginLeft: "1rem" }}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default Chat;
*/
/*
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, TextField, Typography } from "@mui/material";
import { sendMessage, receiveMessage } from "../redux/chatSlice";

const Chat = () => {
  const [message, setMessage] = useState("");
  const messages = useSelector((state) => state.chat.messages);
  const dispatch = useDispatch();
  const chatRef = useRef(null);
  const incomingMessageTimeout = useRef(null); // Ref for the timeout

  useEffect(() => {
    // Scroll to the bottom on new message
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    const simulateIncomingMessage = () => {
      incomingMessageTimeout.current = setTimeout(() => {
        dispatch(
          receiveMessage({
            content: "Hello there!",
            user: "Bot",
            timestamp: new Date().toLocaleTimeString(),
          })
        );
      }, 3000);
    };

    simulateIncomingMessage();

    // Cleanup function to prevent duplicate messages
    return () => {
      if (incomingMessageTimeout.current) {
        clearTimeout(incomingMessageTimeout.current);
      }
    };
  }, [dispatch]);

  const handleSendMessage = () => {
    if (message.trim()) {
      dispatch(
        sendMessage({
          content: message,
          user: "You",
          timestamp: new Date().toLocaleTimeString(),
        })
      );
      setMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage(); // Trigger send message when Enter is pressed
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh", // Full screen height
        width: "100vw", // Full screen width
        overflow: "hidden", // Prevent overflow
        backgroundColor: "#f5f5f5", // Optional background color
      }}
    >
      <Box
        ref={chatRef}
        sx={{
          flexGrow: 1,
          overflowY: "auto", // Scrollable messages area
          padding: "1rem",
          border: "1px solid #ccc",
          backgroundColor: "#fff", // Chat background color
        }}
      >
        {messages.map((msg, idx) => (
          <Box key={idx} sx={{ marginBottom: "1rem" }}>
            <Typography variant="subtitle2" color="textSecondary">
              {msg.user} - {msg.timestamp}
            </Typography>
            <Typography>{msg.content}</Typography>
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          display: "flex",
          padding: "1rem",
          borderTop: "1px solid #ccc",
          backgroundColor: "#fff", // Optional background color
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress} // Listen for Enter key press
        />
        <Button
          onClick={handleSendMessage}
          variant="contained"
          sx={{ marginLeft: "1rem" }}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default Chat;
*/

// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, TextField, Typography } from "@mui/material";
import { sendMessage, receiveMessage } from "../redux/chatSlice";

const Chat = () => {
  const [message, setMessage] = useState("");
  const messages = useSelector((state) => state.chat.messages);
  const dispatch = useDispatch();
  const chatRef = useRef(null);
  const incomingMessageTimeout = useRef(null); // Ref for the timeout

  useEffect(() => {
    // Scroll to the bottom on new message
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    const simulateIncomingMessage = () => {
      incomingMessageTimeout.current = setTimeout(() => {
        dispatch(
          receiveMessage({
            content: "Hello there!",
            user: "Bot",
            timestamp: new Date().toLocaleTimeString(),
          })
        );
      }, 3000);
    };

    simulateIncomingMessage();

    // Cleanup function to prevent duplicate messages
    return () => {
      if (incomingMessageTimeout.current) {
        clearTimeout(incomingMessageTimeout.current);
      }
    };
  }, [dispatch]);

  const handleSendMessage = () => {
    if (message.trim()) {
      dispatch(
        sendMessage({
          content: message,
          user: "You",
          timestamp: new Date().toLocaleTimeString(),
        })
      );
      setMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage(); // Trigger send message when Enter is pressed
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh", // Full screen height
        width: "100vw", // Full screen width
        overflow: "hidden", // Prevent overflow
        backgroundColor: "#f5f5f5", // Optional background color
        justifyContent: "center", // Center the chat box
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "90vh", // Chat box height
          width: "80vw", // Chat box width
          border: "2px solid #000", // Border around the chat box
          borderRadius: "8px", // Optional rounded corners
          overflow: "hidden", // Prevent overflowing of inner components
          backgroundColor: "#fff", // Chat background color
        }}
      >
        {/* Chat messages container */}
        <Box
          ref={chatRef}
          sx={{
            flexGrow: 1,
            overflowY: "auto", // Scrollable messages area
            padding: "1rem",
            borderBottom: "1px solid #ccc", // Border between messages and input
          }}
        >
          {messages.map((msg, idx) => (
            <Box key={idx} sx={{ marginBottom: "1rem" }}>
              <Typography variant="subtitle2" color="textSecondary">
                {msg.user} - {msg.timestamp}
              </Typography>
              <Typography>{msg.content}</Typography>
            </Box>
          ))}
        </Box>

        {/* Message input container */}
        <Box
          sx={{
            display: "flex",
            padding: "1rem",
            backgroundColor: "#f5f5f5",
          }}
        >
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress} // Listen for Enter key press
          />
          <Button
            onClick={handleSendMessage}
            variant="contained"
            sx={{ marginLeft: "1rem" }}
          >
            Send
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Chat;
