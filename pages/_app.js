import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import { useState, useEffect, useRef} from "react";
import { MainNavContext } from "../contexts/MainNavContext";

function MyApp({ Component, pageProps }) {
  const [background, setBackground] = useState("");
  const currentPageProps = useRef("");
  const currentPage = useRef("");
  

  const pageName = async (name) => {
    const bg = name.trim();
    currentPageProps.current = bg;
    currentPage.current = bg;
    localStorage.setItem("page", bg);
    return setBackground(bg);
  };

  useEffect(() => {
    if (localStorage.getItem("page") == undefined) {
      localStorage.setItem("page", "home");
    } else {
      currentPage.current = localStorage.getItem("page");
      currentPageProps.current = localStorage.getItem("page");
      return setBackground(localStorage.getItem("page"));
    }
  },[]);

  useEffect(() => {
    pageProps.background = currentPageProps.current;
  }, [currentPageProps, pageProps]);

  return (
    <MainNavContext.Provider value={{currentPage, pageName}}>
    <Layout props={currentPage}>
      <Component {...pageProps} />
    </Layout>
    </MainNavContext.Provider>
  );
}

export default MyApp;
