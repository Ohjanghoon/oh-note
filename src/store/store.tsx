import { configureStore } from "@reduxjs/toolkit";
import blogPostSlice from "./slices/blogPostSlice";
import blogTagSlice from "./slices/blogTagSlice";

const store = configureStore({
  reducer: {
    post: blogPostSlice,
    tag: blogTagSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
