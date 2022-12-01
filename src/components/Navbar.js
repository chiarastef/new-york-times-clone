import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context";

import { HiOutlineMenu, HiOutlineSearch, HiOutlineX } from "react-icons/hi";

import style from "../style/navbar.module.css";
import logo from "../images/new-york-times-logo.png";

function Navbar(props) {
  const [search, setSearch] = React.useState("");
  // Navbar menu (mobile and tablet view)
  const [showMenu, setShowMenu] = React.useState(false);
  // Search input (desktop view)
  const [showSearch, setShowSearch] = React.useState(false);

  const navigate = useNavigate();
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
  function handleSearch(e) {
    e.preventDefault();
    setShowMenu(false);
    setShowSearch(false);
    setSearch("");
    navigate(`/search/${search}`);
  }

  return (
    <nav className={style.navbarContainer}>
      {/* Main navbar with logo */}
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
          className={`${style.searchIcon} ${style.icon}`}
          onClick={() => setShowSearch(!showSearch)}
        />
      </div>

      <hr />

      {/* Search form in desktop view */}
      {showSearch && (
        <>
          <form className={style.searchForm} onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="search"
              className={style.searchInput}
              autoFocus
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" className={`btn ${style.searchButton}`}>
              <HiOutlineSearch />
            </button>
          </form>
        </>
      )}

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

      <hr />

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

            <button type="submit" className={`btn ${style.searchButton}`}>
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
}

export default Navbar;
