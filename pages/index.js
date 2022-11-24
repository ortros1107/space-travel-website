import Link from "next/link";

import { useContext } from "react";
import Head from "next/head";

import { MainNavContext } from "../contexts/MainNavContext";

import styles from "../styles/Home.module.css";

export default function Home() {

  const {pageName} = useContext(MainNavContext);

  return (
    <>
    <Head>
      <title>Space Travel Website | Home</title>
    </Head>
    <main
      id="main"
      className={styles.background + " " + "fullscreen" + " " + styles.home}
    >
      <div className={`grid-container ${styles["grid-container--home"]}`}>
        <div className={styles["first-child-div"]}>
          <h1 className="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">
            So, you want to travel to
            <span className="d-block fs-900 ff-serif text-white">Space</span>
          </h1>

          <p>
            Let`s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we`ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div>
        <Link href={"/destination"}>
          <a className="large-button uppercase ff-serif text-dark bg-white" onClick={() => pageName("destination")}>
            Explore
          </a>
          </Link>
        </div>
      </div>
    </main>
    </>
  );
}
