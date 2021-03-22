import Head from "next/head";
import Navbar from "./Navbar";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="A test blog to learn next and practice typescript"
        />
        <meta name="keywords" content="typescript nextjs reactjs" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Demo Blog</title>
      </Head>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
