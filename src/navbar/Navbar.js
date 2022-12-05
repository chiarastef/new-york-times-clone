import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { HiOutlineMenu, HiOutlineSearch, HiOutlineX } from "react-icons/hi";

import logo from "../images/new-york-times-logo.png";
import { useGlobalContext } from "../context";
import style from "./navbar.module.css";

const classNames = require("classnames");

const Navbar = (props) => {
  const navigate = useNavigate();
  const [search, setSearch] = React.useState("");
  // Navbar menu (mobile and tablet view)
  const [showMenu, setShowMenu] = React.useState(false);
  // Search input (desktop view)
  const [showSearch, setShowSearch] = React.useState(false);

  const { sections, formatSection } = useGlobalContext();

  // Stop body from scrolling when nav menu is open after checking if ref current is not undefined
  if (showMenu && props.container.current) {
    props.container.current.style.overflowY = "hidden";
    props.container.current.style.position = "fixed";
  } else if (props.container.current) {
    props.container.current.style.overflowY = "visible";
    props.container.current.style.position = "relative";
  }

  // Search articles
  const handleSearch = (e) => {
    e.preventDefault();
    // Search only if user typed something in input field
    if (search) {
      setShowMenu(false);
      setShowSearch(false);
      setSearch("");
      navigate(`/search/${search}`);
    }
  };

  // Get current date and format it
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  };
  const currentDate = new Date().toLocaleDateString(undefined, options);

  return (
    <nav className={style.navbarContainer}>
      {/* Main navbar with logo */}
      <div className={style.navbar}>
        {showMenu ? (
          <HiOutlineX
            className={classNames(style.icon, style.menuIcon)}
            onClick={() => setShowMenu(false)}
          />
        ) : (
          <HiOutlineMenu
            className={classNames(style.icon, style.menuIcon)}
            onClick={() => setShowMenu(true)}
          />
        )}

        <Link to="/">
          <img src={logo} alt="New York Times logo" className={style.logo} />
        </Link>

        <HiOutlineSearch
          className={classNames(style.icon, style.searchIcon)}
          onClick={() => setShowSearch(!showSearch)}
        />
      </div>

      <hr />

      {/* Current date */}
      {showMenu || <div className={style.date}>{currentDate}</div>}

      {/* Navbar menu in desktop view */}
      <ul className={style.sections}>
        {sections.map((section, index) => {
          return (
            <li key={index}>
              {section === "home" ? (
                <NavLink to={`/`}>{formatSection(section)}</NavLink>
              ) : (
                <NavLink to={`/section/${section}`}>
                  {formatSection(section)}
                </NavLink>
              )}
            </li>
          );
        })}
      </ul>

      {/* Search form in desktop view */}
      {showSearch && (
        <form className={style.searchForm} onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="search"
            className={style.searchInput}
            autoFocus
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            type="submit"
            className={classNames("btn", style.searchButton)}
          >
            <HiOutlineSearch />
          </button>
        </form>
      )}

      {/* Navbar menu in mobile and tablet view */}
      {showMenu && (
        <div className={style.sectionMenu}>
          <form className={style.searchForm} onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="search"
              className={style.searchInput}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              type="submit"
              className={classNames("btn", style.searchButton)}
            >
              <HiOutlineSearch />
            </button>
          </form>
          <ul className={style.menu}>
            {sections.map((section, index) => {
              return (
                <li key={index}>
                  {section === "home" ? (
                    <NavLink to={`/`} onClick={() => setShowMenu(false)}>
                      {formatSection(section)}
                    </NavLink>
                  ) : (
                    <NavLink
                      to={`/section/${section}`}
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
};

export default Navbar;
