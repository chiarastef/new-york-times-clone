import React from "react";
import { useGlobalContext } from "./context";

import style from "./home.module.css";
import Article from "./Article";

function Home() {
  const { articles, setSection, loaded } = useGlobalContext();

  React.useEffect(() => {
    setSection("home");
  }, [setSection]);

  if (loaded) {
    return (
      <div className={style.container}>
        {articles.map((article, index) => {
          return <Article key={index} {...article} />;
        })}
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default Home;
