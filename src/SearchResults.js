import React, { useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useParams } from "react-router-dom";

import { useGlobalContext } from "./context";
import SearchArticle from "./SearchArticle";
import style from "./page.module.css";

function SearchResults() {
  const { formatSection, searchedArticles, loaded, searchArticles } =
    useGlobalContext();
  const { id } = useParams();

  useEffect(() => {
    searchArticles(id);
  }, [id, searchArticles]);

  if (loaded && searchedArticles.length < 1) {
    return (
      <div className={style.container}>
        <span className={style.preTitle}>Showing results for:</span>
        <h2 className={style.title}>{formatSection(id)}</h2>
        <hr />
        <div className={style.container}>No search results</div>
      </div>
    );
  }

  return (
    <div className={style.container}>
      <span className={style.preTitle}>Showing results for:</span>
      <h2 className={style.title}>{formatSection(id)}</h2>
      <hr />
      {loaded ? (
        <div className={style.container}>
          {searchedArticles.map((article, index) => {
            return <SearchArticle key={index} {...article} />;
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

export default SearchResults;
