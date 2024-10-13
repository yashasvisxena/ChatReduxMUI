import { createSlice } from '@reduxjs/toolkit';

export const mockMessages = [
  { text: "Hi, how are you?", userId: 1 },
  { text: "I'm good! How about you?", userId: 2 },
  { text: "Doing well! Working on the project?", userId: 1 },
  { text: "Yes, I'm almost finished. Just polishing up a few things.", userId: 2 },
  { text: "That's awesome! Need any help?", userId: 1 },
  { text: "Not at the moment, but I'll let you know. Thanks!", userId: 2 },
  { text: "Sure! Looking forward to seeing your final version.", userId: 1 },
  { text: "I'll send it to you as soon as it's done.", userId: 2 },
  { text: "Perfect! Talk soon.", userId: 1 },
  { text: "Bye!", userId: 2 },
];

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