import { GetStaticProps } from "next";
import path from "path";
import fs from "fs/promises";
import React from "react";
// import ReactMarkdown from "react-markdown";

const FeaturedPosts: React.FC = () => {
  return (
    <section>
      <h1>Featured Posts</h1>

      {/* <ReactMarkdown source={posts} /> */}
    </section>
  );
};

// export const getStaticProps: GetStaticProps = async () => {
//   let fileContent: string[];
//   let feturedPost: string;
//   try {
//     fileContent = await fs.readdir(path.join(process.cwd(), "markdown-posts"));
//     feturedPost = fileContent[0];
//   } catch (error) {
//     console.log(error);
//   }
//   return {
//     props: {
//       feturedPost,
//     },
//   };
// };

export default FeaturedPosts;
