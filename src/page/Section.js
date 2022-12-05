import React from "react";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

import { useGlobalContext } from "../context";
import { useFetchSectionsData } from "../hooks/useFetchSectionsData";
import Article from "../article/Article";
import style from "./page.module.css";

const Section = () => {
  const { formatSection } = useGlobalContext();
  const { sectionName } = useParams();
  const { loaded, articles } = useFetchSectionsData(sectionName);

  // Check if there are articles related to the section
  if (loaded && articles.length < 1) {
    return (
      <div className="sectionContainer">
        <h2 className={style.title}>{formatSection(sectionName)} News</h2>
        <hr />
        <div className={style.article}>No articles found</div>
      </div>
    );
  }

  return (
    <div className="sectionContainer">
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
};

export default Section;
