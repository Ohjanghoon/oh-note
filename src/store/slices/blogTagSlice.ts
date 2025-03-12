import { Tag } from "@/types/postTypes";
import { InitialState } from "@/types/sliceTypes";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface TagState extends InitialState {
  tags: Tag[];
}

const initialState: TagState = {
  tags: [],
  status: "idle",
  error: null,
};

export const getTags = createAsyncThunk("blog/getTags", async () => {
  const response = await fetch("/api/blog/tags");
  if (!response.ok) throw new Error("Failed to fetch tags");
  return response.json();
});

const blogTagSlice = createSlice({
  name: "tag",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTags.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getTags.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tags = action.payload;
      })
      .addCase(getTags.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch tags";
      });
  },
});

export default blogTagSlice.reducer;
