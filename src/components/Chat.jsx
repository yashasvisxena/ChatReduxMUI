import { List, ListItem, ListItemText, Box } from "@mui/material";
import { useRef, useEffect, useState } from "react";
import useChatMessages from "../hooks/useChatMessages";
import { mockMessages } from "../store/MockMessages";
import { useDispatch, useSelector } from "react-redux";
import { receiveMessage } from "../store/Chat.Slice";

const Chat = () => {
  const { messages } = useChatMessages();
  const chatEndRef = useRef(null);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.chat.currentUser);

  const [messageIndex, setMessageIndex] = useState(0);


  useEffect(() => {
    if (messageIndex < mockMessages.length) {
      const timer = setTimeout(() => {
        dispatch(receiveMessage(mockMessages[messageIndex]));
        setMessageIndex((prevIndex) => prevIndex + 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [messageIndex, dispatch]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div style={{ display:"flex", flexDirection:"column", flexGrow:"1", overflowY: "auto", padding: "10vh 10px 10px" }}>
      <List>
        {messages.map((msg) => {
          const isCurrentUser = msg.userId === currentUser.id;

          return (
            <ListItem
              key={msg.id}
              sx={{
                display: "flex",
                justifyContent: isCurrentUser ? "flex-end" : "flex-start",
                paddingLeft: 0,
                paddingRight: 0,
              }}
            >
              <Box
                sx={{
                  backgroundColor: isCurrentUser ? "#e1f5fe" : "#f1f1f1",
                  color: "black",
                  borderRadius: "15px",
                  padding: "10px 15px",
                  maxWidth: "60%",
                  textAlign: isCurrentUser ? "right" : "left",
                }}
              >
                <ListItemText primary={msg.text} secondary={msg.timestamp} />
              </Box>
            </ListItem>
          );
        })}
      </List>
      <div style={{paddingBottom:"10vh"}} ref={chatEndRef} />
    </div>
  );
};

export default Chat;
