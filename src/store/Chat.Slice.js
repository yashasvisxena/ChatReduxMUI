import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [],
  currentUser: { id: 1, name: 'User' }
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    sendMessage: (state, action) => {
      state.messages.push({
        id: Date.now(),
        text: action.payload.text,
        userId: state.currentUser.id,
        timestamp: new Date().toLocaleTimeString(),
      });
    },
    receiveMessage: (state, action) => {
      state.messages.push(action.payload);
    }
  }
});

export const { sendMessage, receiveMessage } = chatSlice.actions;
export default chatSlice.reducer;
