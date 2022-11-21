import React from "react";
import { useGlobalContext } from "./context";

import { HiOutlineMenu, HiOutlineSearch, HiOutlineX } from "react-icons/hi";

import style from "./navbar.module.css";
import logo from "./images/new-york-times-logo.png";

function Navbar() {
  const { sections, formatSection } = useGlobalContext();

  const [showMenu, setShowMenu] = React.useState(false);
  const [showSearch, setShowSearch] = React.useState(false);

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
          return (
            <li key={index} data-section={section}>
              {formatSection(section)}
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
              return (
                <li key={index} data-section={section}>
                  {formatSection(section)}
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
