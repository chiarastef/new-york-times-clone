import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useParams } from "react-router-dom";

import { useGlobalContext } from "../context";
import SearchArticle from "../components/SearchArticle";
import style from "../style/page.module.css";

function SearchResults() {
  const { formatSection, searchedArticles, loaded, searchArticles } =
    useGlobalContext();
  const { query } = useParams();

  React.useEffect(() => {
    searchArticles(query);
  }, [query, searchArticles]);

  // Sort articles
  // Sort by reference, newest or oldest
  const [sortType, setSortType] = React.useState("");
  const [sortedArray, setSortedArray] = React.useState([]);

  React.useEffect(() => {
    setSortedArray(searchedArticles);
  }, [searchedArticles]);

  React.useEffect(() => {
    // Articles arrays sorted by newest and oldest
    const newestArray = [...searchedArticles].sort(function (a, b) {
      return new Date(b.pub_date) - new Date(a.pub_date);
    });
    const oldestArray = [...searchedArticles].sort(function (a, b) {
      return new Date(a.pub_date) - new Date(b.pub_date);
    });

    // Sort array based on sort type
    if (sortType) {
      switch (sortType) {
        case "revelance":
          setSortedArray(searchedArticles);
          break;
        case "newest":
          setSortedArray(newestArray);
          break;
        case "oldest":
          setSortedArray(oldestArray);
          break;
        default:
          setSortedArray(searchedArticles);
      }
    }
  }, [sortType, searchedArticles]);

  // Check if there are search results
  if (loaded && searchedArticles.length < 1) {
    return (
      <div className={style.container}>
        <span className={style.preTitle}>Showing results for:</span>
        <h2 className={style.title}>{formatSection(query)}</h2>
        <hr />
        <div className={style.container}>No search results found</div>
      </div>
    );
  }

  return (
    <div className={style.container}>
      <div className={style.titleElement}>
        <div>
          <span className={style.preTitle}>Showing results for:</span>
          <h2 className={style.title}>{formatSection(query)}</h2>
        </div>
        <select
          className={style.sortOptions}
          onChange={(e) => setSortType(e.target.value)}
        >
          <option value="revelance">Sort by Revelance</option>
          <option value="newest">Sort by Newest</option>
          <option value="oldest">Sort by Oldest</option>
        </select>
      </div>
      <hr />
      {loaded ? (
        <div className={style.container}>
          {sortedArray.map((article, index) => {
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
