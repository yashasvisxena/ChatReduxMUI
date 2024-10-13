import { useState } from "react";
import { TextField, Button } from "@mui/material";
import {useChat} from "../hooks/useChatMessages";

const MessageInput = () => {
  const [input, setInput] = useState("");
  const { inputMessage, handleSendMessage,handleInputChange, handleKeyPress } = useChat();

  const handleSend = () => {
    handleSendMessage(input);
    setInput("");
  };

  return (
    <div
      style={{
        display: "flex",
        position: "fixed",
        zIndex: "1001",
        bottom: 0,
        left: 0,
        width: "100%",
        background: "white",
        padding: 10,
      }}
    >
      <TextField
        fullWidth
        variant="outlined"
        value={inputMessage}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Type a message..."
        sx={{ mr: 1 }}
      />
      <Button variant="contained" onClick={handleSend}>
        Send
      </Button>
    </div>
  );
};

export default MessageInput;
