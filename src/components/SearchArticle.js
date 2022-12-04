import React from "react";
import { useGlobalContext } from "../context";

import style from "../style/article.module.css";

function SearchArticle({
  byline,
  abstract,
  section_name,
  pub_date,
  headline,
  web_url,
}) {
  const { formatDate } = useGlobalContext();

  return (
    <div className={style.container}>
      <div className={style.info}>
        <span className={style.section}>{section_name}</span>
        <span className={`${style.date} ${style.searchedDate}`}>
          {formatDate(pub_date)}
        </span>
      </div>
      <a href={web_url} target="_blank" rel="noreferrer">
        <h3 className={`${style.title} ${style.searchedTitle}`}>
          {headline.main}
        </h3>
      </a>
      <div className={style.author}>{byline.original}</div>
      <div className={`${style.abstract} ${style.searchedAbstract}`}>
        {abstract}
      </div>
    </div>
  );
}

export default SearchArticle;
