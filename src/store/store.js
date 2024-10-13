import { configureStore } from '@reduxjs/toolkit';
import chatReducer from '../store/Chat.Slice';

export const store = configureStore({
  reducer: {
    chat: chatReducer,
  },
});
