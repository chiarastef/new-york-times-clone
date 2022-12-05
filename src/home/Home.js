import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

import Article from "../article/Article";
import { useFetchSectionsData } from "../hooks/useFetchSectionsData";
import style from "./home.module.css";

const Home = () => {
  const { loadedStatus, data } = useFetchSectionsData("home");

  if (loadedStatus) {
    return (
      <div className={style.container}>
        {data.map((article, index) => {
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
