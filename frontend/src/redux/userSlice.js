import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = false;
    },
    subscription: (state, action) => {
      // Check if user already subscribe to the channel
      if (state.currentUser.subscribedChannels.includes(action.payload)) {
        // Find index of the user in subscribedChannels array
        const subscribedUserIndex =
          state.currentUser.subscribedChannels.findIndex(
            (channelId) => channelId === action.payload
          );

        // Remove the userId in subscribedChannels array
        state.currentUser.subscribedChannels.splice(subscribedUserIndex, 1);
      } else {
        // If user hasn't subscribed, push userId to subscribedChannels array
        state.currentUser.subscribedChannels.push(action.payload);
      }
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout, subscription } =
  userSlice.actions;

export default userSlice.reducer;
