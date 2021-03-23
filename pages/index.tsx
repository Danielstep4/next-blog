import FeaturedPosts from "../components/Home/FeaturedPosts";
import Welcome from "../components/Home/Welcome";
import { GetStaticProps } from "next";
import path from "path";
import { readFile } from "fs/promises";
import { BlogPost } from "../types/blogPost";
const Home: React.FC<BlogPost> = ({ blogPost }) => {
  return (
    <main style={{ marginBottom: "3rem" }}>
      <Welcome />
      <FeaturedPosts blogPost={blogPost} />
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  let blogPost: string;
  try {
    blogPost = await readFile(
      path.join(process.cwd(), "markdown-posts", "first-post.md"),
      "utf-8"
    );
  } catch (error) {
    console.log(error);
  }
  if (!blogPost)
    return {
      notFound: true,
    };
  return {
    props: {
      blogPost,
    },
  };
};

export default Home;
