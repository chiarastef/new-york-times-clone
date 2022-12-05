import React from "react";

import { useGlobalContext } from "../context";
import style from "./article.module.css";

const classNames = require("classnames");

const Article = ({
  section,
  published_date,
  title,
  byline,
  multimedia,
  abstract,
  url,
}) => {
  const { formatDate, formatSection } = useGlobalContext();

  if (section !== "admin" && section) {
    return (
      <div className={style.container}>
        {/* Section name and article date */}
        <div className={style.info}>
          <span className={style.section}>{formatSection(section)}</span>
          <span className={style.date}>{formatDate(published_date)}</span>
        </div>
        <div className={style.mainContent}>
          {/* Title, author and abstract(for desktop view) */}
          <div className={style.text}>
            <a href={url} target="_blank" rel="noreferrer">
              <h3 className={style.title}>{title}</h3>
            </a>
            <div className={style.author}>{byline}</div>
            <div className={classNames(style.abstract, style.desktopView)}>
              {abstract}
            </div>
          </div>
          {/* Article image */}
          <div className={style.multimedia}>
            {multimedia && (
              <img
                src={multimedia[1].url}
                alt={title}
                className={style.image}
              />
            )}
          </div>
          {/* Abstract for mobile view */}
          <div className={classNames(style.abstract, style.mobileView)}>
            {abstract}
          </div>
        </div>
      </div>
    );
  }
};

export default Article;
