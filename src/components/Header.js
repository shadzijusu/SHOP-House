import { Link } from "react-router-dom";
import classes from "./Header.module.css"
import logo from "../images/logo.png"
function Header() {
  return (
    <header className={classes.header}>
      <img className={classes.logo} src={logo} alt=""></img>
      <nav className={classes.nav}>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}
export default Header;
