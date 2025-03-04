import { configureStore } from "@reduxjs/toolkit";
import blogPostSlices from "./slices/blogPostSlice";

const store = configureStore({
  reducer: {
    post: blogPostSlices,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
