import React from "react";
import axios from "axios";

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [section, setSection] = React.useState("home");
  const [articles, setArticles] = React.useState([]);

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

  React.useEffect(() => {
    setSection("home");
  }, []);

  function formatSection(section) {
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
  }

  React.useEffect(() => {
    setArticles([]);

    axios
      .get(
        `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => setArticles(response.data.results));
  }, [section]);

  return (
    <AppContext.Provider
      value={{ articles, sections, formatSection, setSection }}
    >
      {children}
    </AppContext.Provider>
  );
}

// Custom hook to pass values
export const useGlobalContext = () => {
  return React.useContext(AppContext);
};

export { AppProvider };
