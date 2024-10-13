/* eslint-disable react-hooks/rules-of-hooks */
import { Box,List, ListItem, Typography } from '@mui/material';
import useChat, { useMessageStyles, useMessageBubbleStyles } from '../hooks/useChatMessages';

const ChatInterface = () => {
  const {
    messages,
    currentUserId,
    chatEndRef,
  } = useChat();

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', p:"10vh 10px"}}>
      <List sx={{ flexGrow: 1, overflow: 'auto', mb: 2 }}>
        {messages.map((msg) => (
          <ListItem key={msg.id} sx={useMessageStyles(msg.userId, currentUserId)}>
            <Typography variant="body1" sx={useMessageBubbleStyles(msg.userId, currentUserId)}>
              {msg.text}
            </Typography>
            <Typography variant="caption" sx={{ mt: 0.5 }}>
              {new Date(msg.timestamp).toLocaleTimeString()}
            </Typography>
          </ListItem>
        ))}
        <div ref={chatEndRef} />
      </List>
    </Box>
  );
};

export default ChatInterface;