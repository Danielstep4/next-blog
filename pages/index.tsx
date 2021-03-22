import FeaturedPosts from "../components/Home/FeaturedPosts";
import Welcome from "../components/Home/Welcome";
import { GetStaticProps } from "next";
import path from "path";
import { readFile } from "fs/promises";
import { FeturedPost } from "../types/feturedPost";
const Home: React.FC<FeturedPost> = ({ feturedPost }) => {
  return (
    <main>
      <Welcome />
      <FeaturedPosts feturedPost={feturedPost} />
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  let feturedPost: string;
  try {
    feturedPost = await readFile(
      path.join(process.cwd(), "markdown-posts", "first-post.md"),
      "utf-8"
    );
  } catch (error) {
    console.log(error);
  }
  if (!feturedPost)
    return {
      notFound: true,
    };
  return {
    props: {
      feturedPost,
    },
  };
};

export default Home;
