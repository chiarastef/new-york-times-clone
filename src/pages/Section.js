import React from "react";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

import { useGlobalContext } from "../context";
import Article from "../components/Article";
import style from "../style/page.module.css";

function Section() {
  const { formatSection, setSection, articles, loaded } = useGlobalContext();
  const { sectionName } = useParams();

  React.useEffect(() => {
    setSection(sectionName);
  }, [sectionName, setSection]);

  // Check if there are articles related to the section
  if (loaded && articles.length < 1) {
    return (
      <div className={style.container}>
        <h2 className={style.title}>{formatSection(sectionName)} News</h2>
        <hr />
        <div className={style.container}>No articles found</div>
      </div>
    );
  }

  return (
    <div className={style.container}>
      <h2 className={style.title}>{formatSection(sectionName)} News</h2>
      <hr />
      {loaded ? (
        <div className={style.article}>
          {articles.map((article, index) => {
            return <Article key={index} {...article} />;
          })}
        </div>
      ) : (
        <ClipLoader
          color={"#727272"}
          cssOverride={{ display: "block", margin: "80px auto" }}
          size={80}
          speedMultiplier={0.5}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
    </div>
  );
}

export default Section;
