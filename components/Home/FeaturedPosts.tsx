import React from "react";
import ReactMarkdown from "react-markdown";
import { FeturedPost } from "../../types/feturedPost";
import gfm from "remark-gfm";
const FeaturedPosts: React.FC<FeturedPost> = ({ feturedPost }): JSX.Element => {
  return (
    <section>
      <h1>Featured Posts</h1>
      <ReactMarkdown
        children={feturedPost}
        className={"blog__post"}
        plugins={[gfm]}
        allowDangerousHtml={true}
      />
    </section>
  );
};

export default FeaturedPosts;
