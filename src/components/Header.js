import { Link } from "react-router-dom";
import classes from "./Header.module.css"
import logo from "../images/logo.png"
import {useEffect, useState} from "react"
function Header() {
  const [position, setPosition] = useState(window.pageYOffset)
    const [visible, setVisible] = useState(true) 
    useEffect(()=> {
        const handleScroll = () => {
           let moving = window.pageYOffset
           
           setVisible(position > moving);
           setPosition(moving)
        };
        window.addEventListener("scroll", handleScroll);
        return(() => {
           window.removeEventListener("scroll", handleScroll);
        })
    })

  const cls = visible ? "visible" : "hidden";
  function GoToHomePage()
  {
    window.location = '/';   
  }
  
  return ( 
    <header className={cls} style={{ backgroundColor: "#f2ebe7",
      alignItems: "center",
      justifyContent: "start",
      display: "flex",
      width: "100%",
      height: "6rem",   
      top: "0"
     }}>
      <img className={classes.logo} src={logo} alt="" onClick={GoToHomePage}></img>
      <nav className={classes.nav}>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}
export default Header;
