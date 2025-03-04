// node modules
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// types
import { PostMetadata } from "@/types/postTypes";
import { InitialState } from "@/types/sliceTypes";

interface BlogPostState extends InitialState {
  posts: PostMetadata[];
}
const initialState: BlogPostState = {
  posts: [],
  status: "idle",
  error: null,
};

export const getPosts = createAsyncThunk(
  "blog/getPosts",
  async (tag?: string) => {
    const url = tag ? `/api/blog?tag=${tag}` : "/api/blog";

    const response = await fetch(url);

    if (!response.ok) throw new Error("Failed to fetch posts");
    return response.json();
  },
);

const blogPostSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch posts";
      });
  },
});

export default blogPostSlice.reducer;
