import React from "react";
import ReactMarkdown from "react-markdown";
import { BlogPost } from "../../types/blogPost";
import gfm from "remark-gfm";
const FeaturedPosts: React.FC<BlogPost> = ({ blogPost }): JSX.Element => {
  return (
    <section>
      <h1>Featured Posts</h1>
      <ReactMarkdown
        children={blogPost}
        className={"blog__post"}
        plugins={[gfm]}
        allowDangerousHtml
      />
    </section>
  );
};

export default FeaturedPosts;
