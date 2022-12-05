import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useParams } from "react-router-dom";

import { useGlobalContext } from "../context";
import { useFetchSearchData } from "../hooks/useFetchSearchData";
import SearchedArticle from "../article/SearchedArticle";
import style from "./page.module.css";

const SearchResults = () => {
  const { formatSection } = useGlobalContext();
  const { query } = useParams();

  const { loaded, articles } = useFetchSearchData(query);

  // Sort articles
  // Sort by reference, newest or oldest
  const [sortType, setSortType] = React.useState("");
  const [sortedArray, setSortedArray] = React.useState([]);

  React.useEffect(() => {
    setSortedArray(articles);
  }, [articles]);

  React.useEffect(() => {
    // Articles arrays sorted by newest and oldest
    const newestArray = [...articles].sort(function (a, b) {
      return new Date(b.pub_date) - new Date(a.pub_date);
    });
    const oldestArray = [...articles].sort(function (a, b) {
      return new Date(a.pub_date) - new Date(b.pub_date);
    });

    // Sort array based on sort type
    if (sortType) {
      switch (sortType) {
        case "revelance":
          setSortedArray(articles);
          break;
        case "newest":
          setSortedArray(newestArray);
          break;
        case "oldest":
          setSortedArray(oldestArray);
          break;
        default:
          setSortedArray(articles);
      }
    }
  }, [sortType, articles]);

  // Check if there are search results
  if (loaded && articles.length < 1) {
    return (
      <div className="sectionContainer">
        <span className={style.preTitle}>Showing results for:</span>
        <h2 className={style.title}>{formatSection(query)}</h2>
        <hr />
        <div className="sectionContainer">No search results found</div>
      </div>
    );
  }

  return (
    <div className="sectionContainer">
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
        <div className="sectionContainer">
          {sortedArray.map((article, index) => {
            return <SearchedArticle key={index} {...article} />;
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

export default SearchResults;
