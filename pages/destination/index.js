import { useState, useRef } from "react";
import Head from "next/head";

import data from "../../data/data.json";
import isActive from "../../utility/IsActive";

import styles from "../../styles/Destination.module.css";

const DestinationLayout = () => {

  const wholeContent = data.destinations;
  const title = useRef("Moon");
  const [content, setContent] = useState(wholeContent[0]);

  const whichTitleAndContent = (name) => {
    title.current = name;
    let currentContent = wholeContent.filter(
      (content) => content.name === name
    );
    console.log(currentContent);
    setContent(currentContent[0]);
  };

  return (
    <>
    <Head>
      <title>Space Travel Website | Destination</title>
    </Head>
    <main
      id="main"
      className={`${styles.background} grid-container ${styles.destination} ${styles["grid-container--destination"]} flow`}
    >
      <h1 className="numbered-title">
        <span aria-hidden="true">01</span> Pick your destination
      </h1>
      <picture>
        <source srcSet={content.images.webp} type="image/webp"></source>
        <img src={content.images.png} alt={`The ${content.name}`}></img>
      </picture>
      <div
        className={`${styles["tab-list"]} ${styles["underline-indicators"]} flex`}
      >
        <button
          className="uppercase ff-sans-cond text-accent letter-spacing-2"
          onClick={() => whichTitleAndContent("Moon")}
        >
          <span aria-selected={isActive(content.name, "Moon")}>Moon</span>
        </button>
        <button
          className="uppercase ff-sans-cond text-accent letter-spacing-2"
          onClick={() => whichTitleAndContent("Mars")}
        >
          <span aria-selected={isActive(content.name, "Mars")}>Mars</span>
        </button>
        <button
          className="uppercase ff-sans-cond text-accent letter-spacing-2"
          onClick={() => whichTitleAndContent("Europa")}
        >
          <span aria-selected={isActive(content.name, "Europa")}>Europa</span>
        </button>
        <button
          className="uppercase ff-sans-cond text-accent letter-spacing-2"
          onClick={() => whichTitleAndContent("Titan")}
        >
          <span aria-selected={isActive(content.name, "Titan")}>Titan</span>
        </button>
      </div>

      <article className={`${styles["destination-info"]} flow`}>
        <h2 className="fs-800 uppercase ff-serif">{content.name}</h2>

        <p>{content.description}</p>

        <div className={`${styles["destination-meta"]} flex`}>
          <div>
            <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
            <p className="ff-serif uppercase">{content.distance}</p>
          </div>
          <div>
            <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
            <p className="ff-serif uppercase">{content.travel}</p>
          </div>
        </div>
      </article>
    </main>
    </>
  );
};

export default DestinationLayout;
