import { GetStaticPaths, GetStaticProps } from "next";
import path from "path";
import { readFile } from "fs/promises";
import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { BlogPost } from "../../types/blogPost";
const ShowBlogPostBySlug: React.FC<BlogPost> = ({ blogPost }) => {
  return (
    <>
      <ReactMarkdown
        children={blogPost}
        className={"blog__post"}
        plugins={[gfm]}
        allowDangerousHtml
      />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params;
  let blogPost: string;
  try {
    blogPost = await readFile(
      path.join(process.cwd(), "markdown-posts", `${slug}.md`),
      "utf-8"
    );
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      blogPost,
    },
  };
};
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { slug: "first-post" } },
      { params: { slug: "second-post" } },
    ],
    fallback: false,
  };
};
export default ShowBlogPostBySlug;
