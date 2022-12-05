import React from "react";

import { useGlobalContext } from "../context";
import style from "./article.module.css";

const classNames = require("classnames");

const SearchedArticle = ({
  byline,
  abstract,
  section_name,
  pub_date,
  headline,
  web_url,
}) => {
  const { formatDate } = useGlobalContext();

  return (
    <div className={style.container}>
      <div className={style.info}>
        <span className={style.section}>{section_name}</span>
        <span className={classNames(style.date, style.searchedDate)}>
          {formatDate(pub_date)}
        </span>
      </div>
      <a href={web_url} target="_blank" rel="noreferrer">
        <h3 className={classNames(style.title, style.searchedTitle)}>
          {headline.main}
        </h3>
      </a>
      <div className={style.author}>{byline.original}</div>
      <div className={classNames(style.abstract, style.searchedAbstract)}>
        {abstract}
      </div>
    </div>
  );
};

export default SearchedArticle;
