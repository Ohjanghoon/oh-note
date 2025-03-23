"use client";

import Comments from "@/components/blog/Comments";
import BlogContentButtons from "@/components/blog/BlogContentButtons";

function BlogWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="blog_content_container">
      {children}
      <BlogContentButtons />
      <Comments />
    </div>
  );
}

export default BlogWrapper;
