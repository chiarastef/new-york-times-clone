import React from "react";
import { useParams } from "react-router-dom";

import { useGlobalContext } from "./context";
import Article from "./Article";
import style from "./section.module.css";

function Section() {
  const { formatSection, setSection, articles, loaded } = useGlobalContext();
  const { id } = useParams();

  React.useEffect(() => {
    setSection(id);
  }, [id, setSection]);

  return (
    <div className={style.container}>
      <h2 className={style.title}>{formatSection(id)} News</h2>
      <hr />
      {loaded ? (
        <div className={style.container}>
          {articles.map((article, index) => {
            return <Article key={index} {...article} />;
          })}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Section;