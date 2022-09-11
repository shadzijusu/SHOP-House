import { Link } from "react-router-dom";
import classes from "../modules/Header.module.css";
import logo from "../../images/logo.png";
import { useEffect, useState } from "react";
import React from 'react';
import cart from "../../images/carticon.png"
function Header() {
  const [position, setPosition] = useState(window.pageYOffset);
  const [total, setTotal] = useState((Math.round(JSON.parse(localStorage.getItem("total")) * 100 ) / 100).toFixed(2) || 0);
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      let moving = window.pageYOffset;

      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const cls = visible ? "visible" : "hidden";
  function GoToHomePage() {
    window.location = "/";
  }
  function openCart() {
    window.location = "/cart";
  }
  useEffect(() => {
    
    window.addEventListener('storage', () => {
      // When local storage changes, dump the list to
      // the console.
      try {
       setTotal((Math.round(JSON.parse(localStorage.getItem("total")) * 100 ) / 100).toFixed(2))  
       setNumberOfItems(JSON.parse(localStorage.getItem("products")).length)
      }
      catch(err) {
        localStorage.setItem("total", "0")
      }
    });
    
       
    }, [])
  return (
    <header
      className={cls}
      style={{
        backgroundColor: "#f2ebe7",
        alignItems: "center",
        justifyContent: "start",
        display: "flex",
        width: "100%",
        height: "6rem",
        top: "0",
      }}
    >
      <img
        className={classes.logo}
        src={logo}
        alt=""
        onClick={GoToHomePage}
      ></img>
      <nav className={classes.nav}>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
        <div className={classes.cartElement}>
        <button
          className={classes.cart}
          onClick={openCart}
        ><img className={classes.cartIcon} src={cart} alt=""></img></button>
        <span className={classes.span}>{numberOfItems} (${total})</span>
        </div>
      </nav>
    </header>
  );
}
export default Header;
