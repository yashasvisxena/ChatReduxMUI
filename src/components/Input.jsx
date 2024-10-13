import { useState } from 'react';
import { TextField, Button } from '@mui/material';
import useChatMessages from '../hooks/useChatMessages';

const MessageInput = () => {
  const [input, setInput] = useState('');
  const { handleSendMessage } = useChatMessages();

  const handleSend = () => {
    handleSendMessage(input);
    setInput('');
  };

  return (
    <div style={{display:"flex" , position:"fixed" , zIndex:"1001" , bottom:0, left:0, width:"100%" , background:"white", padding:10}}>
      <TextField
        label="Type a message"
        variant="outlined"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        fullWidth
      />
      <Button sx={{mx:2}} onClick={handleSend} variant="contained">Send</Button>
    </div>
  );
};

export default MessageInput;
