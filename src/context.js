import React from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
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
        formatDate,
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
