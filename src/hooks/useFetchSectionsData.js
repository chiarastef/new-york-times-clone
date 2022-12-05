import React from "react";
import axios from "axios";

export const useFetchSectionsData = (section) => {
  const [loadedStatus, setLoadedStatus] = React.useState(false);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    setLoadedStatus(false);

    // Call API only once a section is defined
    section &&
      axios
        .get(
          `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${process.env.REACT_APP_API_KEY}`
        )
        .then((response) => setData(response.data.results))
        .then(() => setLoadedStatus(true))
        .catch((error) => {
          setLoadedStatus(true);
          console.log(error);
        });
  }, [section]);

  return { loadedStatus, data };
};
