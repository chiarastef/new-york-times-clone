import React from "react";
import axios from "axios";

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [articles, setArticles] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(
        `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => setArticles(response.data.results));
  }, []);

  return (
    <AppContext.Provider value={{ articles }}>{children}</AppContext.Provider>
  );
}

// Custom hook to pass values
export const useGlobalContext = () => {
  return React.useContext(AppContext);
};

export { AppProvider };
