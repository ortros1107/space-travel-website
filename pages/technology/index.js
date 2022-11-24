import { useState, useRef} from "react";

import data from "../../data/data.json";
import isActive from "../../utility/IsActive";

import styles from "../../styles/Technology.module.css";

import Head from "next/head";

const TechnologyLayout = () => {

    const wholeContent = data.technology;
    const title = useRef("Launch vehicle");
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
      <title>Space Travel Website | Technology</title>
    </Head>

    <main id="main" className={`grid-container ${styles["grid-container--technology"]} flow`}>
    <h1 className="numbered-title"><span aria-hidden="true" style={{fontWeight: 500, marginRight: 0.25 + "em"}}>03</span> Space launch 101</h1>
    
    <picture className={`${styles.mobile}`}>
      <img className={`${styles["image-landscape"]}`} src={content.images.landscape} alt={content.name}></img>
    </picture>

    <picture className={`${styles.tablet}`}>
      <img className={`${styles["image-landscape"]}`} src={content.images.landscape} alt={content.name}></img>
    </picture>

    <picture className={`${styles.desktop}`}>
      <img className={`${styles["image-portrait"]}`} src={content.images.portrait} alt={content.name}></img>
    </picture>
    
    <div className={`${styles["round-indicators"]} flex`}>
        <button onClick={() => whichTitleAndContent("Launch vehicle")}><span aria-selected={isActive(content.name, "Launch vehicle")}>1</span></button>
        <button onClick={() => whichTitleAndContent("Spaceport")}><span aria-selected={isActive(content.name, "Spaceport")}>2</span></button>
        <button onClick={() => whichTitleAndContent("Space capsule")}><span aria-selected={isActive(content.name, "Space capsule")}>3</span></button>
    </div>

    <article className={`${styles["technology-details"]} flow`}>
      <header>
        <h2 id={`${styles["header-title"]}`} className="ff-sans-normal uppercase text-accent">The terminology...</h2>
        <p id={`${styles["header-paragraph"]}`} className="ff-sans-normal uppercase">{content.name}</p>
      </header>
      <p id={`${styles.paragraph}`} className="ff-sans-normal text-accent">{content.description}</p>
    </article> 

</main> 
    </>
   );
}
 
export default TechnologyLayout;


