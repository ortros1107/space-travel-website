import { useState, useRef} from "react";

import data from "../../data/data.json";
import isActive from "../../utility/IsActive";

import styles from "../../styles/Crew.module.css";
import Head from "next/head";

const CrewLayout = () => {

  const wholeContent = data.crew;
  const title = useRef("Douglas Hurley");
  const [content, setContent] = useState(wholeContent[0]);

  const whichTitleAndContent = (name) => {
    title.current = name;
    let currentContent = wholeContent.filter(
      (content) => content.name === name
    );
    setContent(currentContent[0]);
  };

  return (
    <>
    <Head>
      <title>Space Travel Website | Crew</title>
    </Head>
    
    <main
      id="main"
      className={`${styles.background} grid-container ${styles.crew} ${styles["grid-container--crew"]} flow`}
    >
      <h1 className="numbered-title">
        <span aria-hidden="true">02</span> Meet your crew
      </h1>

      <div className={`${styles["dot-indicators"]} flex`}>
        <button onClick={() => whichTitleAndContent("Douglas Hurley")}>
          <span className="sr-only" aria-selected={isActive(content.name, "Douglas Hurley")}>
            The commander
          </span>
        </button>
        <button onClick={() => whichTitleAndContent("Mark Shuttleworth")}>
          <span className="sr-only" aria-selected={isActive(content.name, "Mark Shuttleworth")}>
            The mission specialist
          </span>
        </button>
        <button onClick={() => whichTitleAndContent("Victor Glover")}>
          <span className="sr-only" aria-selected={isActive(content.name, "Victor Glover")}>
            The pilot
          </span>
        </button>
        <button onClick={() => whichTitleAndContent("Anousheh Ansari")}>
          <span className="sr-only" aria-selected={isActive(content.name, "Anousheh Ansari")}>
            The crew engineer
          </span>
        </button>
      </div>

      <article className={`${styles["crew-details"]} flow`}>
        <header className="flow flow--space-small">
          <h2 className="fs-600 ff-serif uppercase">{content.role}</h2>
          <p className="fs-700 uppercase ff-serif">{content.name}</p>
        </header>
        <p>
        {content.bio}
        </p>
      </article>
      <picture>
        <source
          srcSet={content.images.webp}
          type="image/webp"
        ></source>
        <img
          src={`${content.images.png}`} 
          alt={`${content.role}`}
        ></img>
      </picture>
    </main>
    </>
  );
};

export default CrewLayout;
