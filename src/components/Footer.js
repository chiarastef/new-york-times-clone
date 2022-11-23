import { Link, NavLink } from "react-router-dom";
import { useGlobalContext } from "../context";

import style from "../style/footer.module.css";
import logo from "../images/new-york-times-logo.png";

function Footer() {
  const { sections, formatSection } = useGlobalContext();

  function scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

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

        <div className={style.copyright}>
          <small>&copy; Copyright 2022, Chiara Stefanelli</small>
        </div>
      </footer>
    </>
  );
}

export default Footer;
