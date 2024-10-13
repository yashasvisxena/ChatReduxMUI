
import { useState, useCallback, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { receiveMessage, sendMessage } from '../store/Chat.Slice';


export const useChat = () => {
  const [inputMessage, setInputMessage] = useState('');
  const messages = useSelector((state) => state.chat.messages);
  const currentUserId = useSelector((state) => state.chat.currentUserId);
  const dispatch = useDispatch();
  const chatEndRef = useRef(null);

  const handleSendMessage = useCallback(() => {
    if (inputMessage.trim()) {
      dispatch(sendMessage(inputMessage));
      setInputMessage('');
      
      setTimeout(() => {
        dispatch(receiveMessage(`Echo: ${inputMessage}`));
      }, 2000);
    }
  }, [inputMessage, dispatch]);

  const handleInputChange = useCallback((e) => {
    setInputMessage(e.target.value);
  }, []);

  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  }, [handleSendMessage]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return {
    inputMessage,
    messages,
    currentUserId,
    chatEndRef,
    handleSendMessage,
    handleInputChange,
    handleKeyPress,
  };
};

export const useMessageStyles = (userId, currentUserId) => {
  return {
    flexDirection: 'column',
    alignItems: userId === currentUserId ? 'flex-end' : 'flex-start',
  };
};

export const useMessageBubbleStyles = (userId, currentUserId) => {
  return {
    bgcolor: userId === currentUserId ? 'primary.main' : 'secondary.main',
    color: 'white',
    p: 1,
    borderRadius: 1,
  };
};
