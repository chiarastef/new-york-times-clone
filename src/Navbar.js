import React from "react";

import style from "./navbar.module.css";
import { HiOutlineMenu, HiOutlineSearch, HiOutlineX } from "react-icons/hi";
import logo from "./images/new-york-times-logo.png";

function Navbar() {
  const [showMenu, setShowMenu] = React.useState(false);
  const [showSearch, setShowSearch] = React.useState(false);

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

  return (
    <nav>
      <div className={style.navbar}>
        {showMenu ? (
          <HiOutlineX
            className={style.icon}
            onClick={() => setShowMenu(false)}
          />
        ) : (
          <HiOutlineMenu
            className={style.icon}
            onClick={() => setShowMenu(true)}
          />
        )}

        <img src={logo} alt="New York Times logo" className={style.logo} />

        <HiOutlineSearch
          className={style.searchIcon}
          onClick={() => setShowSearch(!showSearch)}
        />
      </div>

      <hr />

      {showSearch && (
        <div>
          <form className={style.searchForm}>
            <input
              type="text"
              placeholder="search"
              className={style.searchInput}
            />
            <button type="submit" className={style.searchButton}>
              <HiOutlineSearch />
            </button>
          </form>
        </div>
      )}

      <ul className={style.sections}>
        {sections.map((section, index) => {
          let sectionName;

          switch (section) {
            case "us":
              sectionName = "U.S.";
              break;
            case "nyregion":
              sectionName = "N.Y.";
              break;
            case "t-magazine":
              sectionName = "magazine";
              break;
            case "realestate":
              sectionName = "real estate";
              break;
            default:
              sectionName = section;
              break;
          }

          return (
            <li key={index} data-section={section}>
              {sectionName}
            </li>
          );
        })}
      </ul>

      <hr />

      {showMenu && (
        <div className={style.sectionMenu}>
          <form className={style.searchForm}>
            <input
              type="text"
              placeholder="search"
              className={style.searchInput}
            />
            <button type="submit" className={style.searchButton}>
              <HiOutlineSearch />
            </button>
          </form>
          <ul className={style.menu}>
            {sections.map((section, index) => {
              let sectionName;

              switch (section) {
                case "us":
                  sectionName = "U.S.";
                  break;
                case "nyregion":
                  sectionName = "N.Y.";
                  break;
                case "t-magazine":
                  sectionName = "magazine";
                  break;
                case "realestate":
                  sectionName = "real estate";
                  break;
                default:
                  sectionName = section;
                  break;
              }

              return (
                <li key={index} data-section={section}>
                  {sectionName}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
