import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentVideo: null,
  loading: false,
  error: false,
};

export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    fetchSuccess: (state, action) => {
      state.loading = false;
      state.currentVideo = action.payload;
    },
    fetchFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    like: (state, action) => {
      // Check if user hasn't liked video
      if (!state.currentVideo.likes.includes(action.payload)) {
        // If user hasn't liked => push userId (payload) to likes array
        state.currentVideo.likes.push(action.payload);

        // remove userId (payload) from dislikes array

        state.currentVideo.dislikes.splice(
          state.currentVideo.dislikes.findIndex(
            (userId) => userId === "action.payload"
          ),
          1
        );
      }
    },
    dislike: (state, action) => {
      // Check if user hasn't disliked video
      if (!state.currentVideo.dislikes.includes(action.payload)) {
        // If user hasn't liked => push userId (payload) to dislikes array
        state.currentVideo.dislikes.push(action.payload);

        // remove userId (payload) from likes array
        state.currentVideo.likes.splice(
          state.currentVideo.likes.findIndex(
            (userId) => userId === "action.payload"
          ),
          1
        );
      }
    },
    resetLike: (state, action) => {
      state.currentVideo.likes.splice(
        state.currentVideo.likes.findIndex(
          (userId) => userId === "action.payload"
        ),
        1
      );
    },
    resetDislike: (state, action) => {
      state.currentVideo.dislikes.splice(
        state.currentVideo.dislikes.findIndex(
          (userId) => userId === "action.payload"
        ),
        1
      );
    },
  },
});

export const {
  fetchStart,
  fetchSuccess,
  fetchFailure,
  like,
  dislike,
  resetLike,
  resetDislike,
} = videoSlice.actions;

export default videoSlice.reducer;
