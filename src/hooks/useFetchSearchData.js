import React from "react";
import axios from "axios";

export const useFetchSearchData = (query) => {
  const [loaded, setLoaded] = React.useState(false);
  const [articles, setArticles] = React.useState([]);

  React.useEffect(() => {
    setLoaded(false);

    axios
      .get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => setArticles(response.data.response.docs))
      .then(() => setLoaded(true))
      .catch((error) => console.log(error));
  }, [query]);

  return { loaded, articles };
};
