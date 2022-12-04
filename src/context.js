import React from "react";
import axios from "axios";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loaded, setLoaded] = React.useState(false);
  const [section, setSection] = React.useState("");
  const [articles, setArticles] = React.useState([]);
  const [searchedArticles, setSearchedArticles] = React.useState([]);

  // NY Times Top Stories API sections
  const sections = [
    "home",
    "world",
    "us",
    "politics",
    "nyregion",
    "business",
    "opinion",
    "science",
    "arts",
    "books",
    "style",
    "food",
    "travel",
    "t-magazine",
    "realestate",
  ];

  // Format sections' names for navbar menu
  const formatSection = (section) => {
    switch (section) {
      case "us":
        return "U.S.";
      case "nyregion":
        return "N.Y.";
      case "t-magazine":
        return "magazine";
      case "realestate":
        return "real estate";
      default:
        return section;
    }
  };

  // NY Times Top Stories API Call
  React.useEffect(() => {
    setLoaded(false);

    // Call API only once a section is defined
    section &&
      axios
        .get(
          `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${process.env.REACT_APP_API_KEY}`
        )
        .then((response) => setArticles(response.data.results))
        .then(() => setLoaded(true))
        .catch((error) => {
          setLoaded(true);
          console.log(error);
        });
  }, [section]);

  // NY Times Article Search API
  const searchArticles = React.useCallback((item) => {
    setLoaded(false);

    axios
      .get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${item}&api-key=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => setSearchedArticles(response.data.response.docs))
      .then(() => setLoaded(true))
      .catch((error) => console.log(error));
  }, []);

  // Format articles' date
  const formatDate = (date) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    return new Date(date).toLocaleDateString(undefined, options);
  };

  return (
    <AppContext.Provider
      value={{
        sections,
        formatSection,
        setSection,
        loaded,
        articles,
        formatDate,
        searchArticles,
        searchedArticles,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to pass values
export const useGlobalContext = () => {
  return React.useContext(AppContext);
};

export { AppProvider };
