
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage} from '../store/Chat.Slice';

const useChatMessages = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chat.messages);

  const handleSendMessage = (text) => {
    if (text.trim()) {
      dispatch(sendMessage({ text }));
    }
  };

  return { messages, handleSendMessage };
};

export default useChatMessages;
