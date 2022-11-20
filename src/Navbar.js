import style from "./navbar.module.css";
import { HiOutlineMenu, HiOutlineSearch } from "react-icons/hi";
import logo from "./images/new-york-times-logo.png";

function Navbar() {
  return (
    <nav className={style.navbar}>
      <HiOutlineMenu className={style.icon} />
      <img src={logo} alt="New York Times logo" className={style.logo} />
      <HiOutlineSearch className={style.icon} />
    </nav>
  );
}

export default Navbar;
