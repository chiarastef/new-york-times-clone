import React from "react";
import axios from "axios";

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [section, setSection] = React.useState("");
  const [articles, setArticles] = React.useState([]);
  const [loaded, setLoaded] = React.useState(false);

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

  // Format sections for menu
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

  // API Call
  React.useEffect(() => {
    setLoaded(false);

    // Call API only once we have a section
    section &&
      axios
        .get(
          `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${process.env.REACT_APP_API_KEY}`
        )
        .then((response) => setArticles(response.data.results))
        .then(() => setLoaded(true));
  }, [section]);

  return (
    <AppContext.Provider
      value={{ sections, formatSection, setSection, loaded, articles }}
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
