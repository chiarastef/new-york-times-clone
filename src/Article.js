import React from "react";

import style from "./article.module.css";

function Article({ title, byline, section, multimedia, published_date }) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const date = new Date(published_date).toLocaleDateString(undefined, options);

  return (
    <div className={style.container}>
      <h3>{title}</h3>
      <p>{byline}</p>
      <p>{date}</p>
      <img src={multimedia[1].url} alt={title} className={style.image} />
    </div>
  );
}

export default Article;
