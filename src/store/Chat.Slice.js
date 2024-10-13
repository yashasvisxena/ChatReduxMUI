import { createSlice } from '@reduxjs/toolkit';
import { mockMessages } from './MockMessages';


const initialState = {
  messages: mockMessages.map((msg, index) => ({
    ...msg,
    id: index + 1,
    timestamp: new Date(Date.now() - (mockMessages.length - index) * 60000).toISOString(),
  })),
  currentUserId: 1,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    sendMessage: (state, action) => {
      state.messages.push({
        id: state.messages.length + 1,
        text: action.payload,
        userId: state.currentUserId,
        timestamp: new Date().toISOString(),
      });
    },
    receiveMessage: (state, action) => {
      state.messages.push({
        id: state.messages.length + 1,
        text: action.payload,
        userId: state.currentUserId === 1 ? 2 : 1,
        timestamp: new Date().toISOString(),
      });
    },
  },
});

export const { sendMessage, receiveMessage } = chatSlice.actions;
export default chatSlice.reducer;