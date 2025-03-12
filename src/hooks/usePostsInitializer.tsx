import { useDispatch } from "react-redux";

// store
import { AppDispatch } from "@/store/store";
import { useEffect } from "react";
import { getPosts } from "@/store/slices/blogPostSlice";
import { getTags } from "@/store/slices/blogTagSlice";

function usePostsInitializer() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    console.log("Dispatch PostInitializer!");
    dispatch(getPosts());
    dispatch(getTags());
  }, [dispatch]);
}

export default usePostsInitializer;
