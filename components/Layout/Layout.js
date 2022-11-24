import Head from "next/head";
import Header from "./Header/Header";
import LocalNav from "./LocalNav/LocalNav";
import Footer from "../Footer";

const Layout = ({ children, props }) => {
  return (
    <>
      <Head>
        <title>Space Travel Website</title>
        <meta property="og:title" content="Space Travel Website" key="title" />
      </Head>
      <LocalNav />
      <Header currentPage={props} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
