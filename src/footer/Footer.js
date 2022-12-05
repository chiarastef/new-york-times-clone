import { Link, NavLink } from "react-router-dom";

import logo from "../images/new-york-times-logo.png";
import { useGlobalContext } from "../context";
import style from "./footer.module.css";

const Footer = () => {
  const { sections, formatSection } = useGlobalContext();

  // Scroll to top when a nav link is clicked
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <hr className={style.divider} />
      <footer className={style.footerContainer}>
        <Link to="/" onClick={scrollToTop}>
          <img src={logo} alt="New York Times logo" className={style.logo} />
        </Link>
        <ul className={style.nav}>
          {sections.map((section, index) => {
            return (
              <li key={index}>
                {section === "home" ? (
                  <NavLink to={`/`} onClick={scrollToTop}>
                    {formatSection(section)}
                  </NavLink>
                ) : (
                  <NavLink to={`/section/${section}`} onClick={scrollToTop}>
                    {formatSection(section)}
                  </NavLink>
                )}
              </li>
            );
          })}
        </ul>
        <div className={style.copyright}>
          <small>&copy; Copyright 2022, Chiara Stefanelli</small>
        </div>
      </footer>
    </>
  );
};

export default Footer;
