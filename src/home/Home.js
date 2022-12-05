import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

import { useFetchSectionsData } from "../hooks/useFetchSectionsData";
import Article from "../article/Article";
import style from "./home.module.css";

const Home = () => {
  const { loaded, articles } = useFetchSectionsData("home");

  if (loaded) {
    return (
      <div className={style.container}>
        {articles.map((article, index) => {
          return <Article key={index} {...article} />;
        })}
      </div>
    );
  } else {
    return (
      <ClipLoader
        color={"#727272"}
        cssOverride={{ display: "block", margin: "80px auto" }}
        size={80}
        speedMultiplier={0.5}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  }
};

export default Home;
