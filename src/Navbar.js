import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useGlobalContext } from "./context";

import { HiOutlineMenu, HiOutlineSearch, HiOutlineX } from "react-icons/hi";

import style from "./navbar.module.css";
import logo from "./images/new-york-times-logo.png";

function Navbar() {
  const { sections, formatSection } = useGlobalContext();

  // Navbar menu (mobile and tablet view)
  const [showMenu, setShowMenu] = React.useState(false);
  // Search input (desktop view)
  const [showSearch, setShowSearch] = React.useState(false);

  // Stop body from scrolling when nav menu is open
  const wrapperDiv = document.getElementById("root");

  if (showMenu) {
    wrapperDiv.style.overflowY = "hidden";
    wrapperDiv.style.position = "fixed";
  } else {
    wrapperDiv.style.overflowY = "visible";
    wrapperDiv.style.position = "relative";
  }

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

        <Link to="/">
          <img src={logo} alt="New York Times logo" className={style.logo} />
        </Link>

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
              {section === "home" ? (
                <NavLink to={`/`}>{formatSection(section)}</NavLink>
              ) : (
                <NavLink to={`/${section}`}>{formatSection(section)}</NavLink>
              )}
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
                  {section === "home" ? (
                    <NavLink to={`/`} onClick={() => setShowMenu(false)}>
                      {formatSection(section)}
                    </NavLink>
                  ) : (
                    <NavLink
                      to={`/${section}`}
                      onClick={() => setShowMenu(false)}
                    >
                      {formatSection(section)}
                    </NavLink>
                  )}
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
