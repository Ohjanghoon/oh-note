"use client";

import Comments from "@/components/blog/Comments";

function BlogWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="blog_content_container">
      {children}
      <Comments />
    </div>
  );
}

export default BlogWrapper;
