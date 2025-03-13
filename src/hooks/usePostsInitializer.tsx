import { useDispatch, useSelector } from "react-redux";

// store
import { AppDispatch, RootState } from "@/store/store";
import { useEffect } from "react";
import { getPosts } from "@/store/slices/blogPostSlice";
import { getTags } from "@/store/slices/blogTagSlice";

function usePostsInitializer() {
  const dispatch = useDispatch<AppDispatch>();
  const isLoadingPosts = useSelector(
    (state: RootState) => state.post.status === "succeeded",
  );
  const isLoadingTags = useSelector(
    (state: RootState) => state.tag.status === "succeeded",
  );

  useEffect(() => {
    console.log("Dispatch PostInitializer!");
    dispatch(getPosts());
    dispatch(getTags());
  }, [dispatch]);

  return isLoadingPosts && isLoadingTags;
}

export default usePostsInitializer;
