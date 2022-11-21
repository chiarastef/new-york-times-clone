import React from "react";
import { useGlobalContext } from "./context";

import style from "./article.module.css";

function Article({
  section,
  published_date,
  title,
  byline,
  multimedia,
  abstract,
}) {
  const { formatSection } = useGlobalContext();

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const date = new Date(published_date).toLocaleDateString(undefined, options);

  return (
    <div className={style.container}>
      <div className={style.info}>
        <span className={style.section}>{formatSection(section)}</span>
        <span className={style.date}>{date}</span>
      </div>
      <h3 className={style.title}>{title}</h3>
      <div className={style.author}>{byline}</div>
      <img src={multimedia[0].url} alt={title} className={style.image} />
      <div className={style.abstract}>{abstract}</div>
    </div>
  );
}

export default Article;
