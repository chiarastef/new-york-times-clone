import React from "react";

import style from "./article.module.css";

function SearchArticle({ byline, abstract, section_name, pub_date, headline }) {
  // Format date
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = new Date(pub_date).toLocaleDateString(undefined, options);

  return (
    <div className={style.container}>
      <div className={style.info}>
        <span className={style.section}>{section_name}</span>
        <span className={`${style.date} ${style.searchedDate}`}>{date}</span>
      </div>
      <h3 className={`${style.title} ${style.searchedTitle}`}>
        {headline.main}
      </h3>
      <div className={style.author}>{byline.original}</div>
      <div className={`${style.abstract} ${style.searchedAbstract}`}>
        {abstract}
      </div>
    </div>
  );
}

export default SearchArticle;
