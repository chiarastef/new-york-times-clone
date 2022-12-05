import React from "react";
import axios from "axios";

export const useFetchSearchData = (query) => {
  const [loadedStatus, setLoadedStatus] = React.useState(false);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    setLoadedStatus(false);

    axios
      .get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => setData(response.data.response.docs))
      .then(() => setLoadedStatus(true))
      .catch((error) => console.log(error));
  }, [query]);

  return { loadedStatus, data };
};
