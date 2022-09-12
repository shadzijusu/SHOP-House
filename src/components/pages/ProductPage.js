import Product from "./Product";
import { useLocation } from "react-router-dom";
import classes from "../modules/ProductPage.module.css";
import { useEffect, useState } from "react";
import React from "react";

function ProductPage() {
  const location = useLocation();
  const { from } = location.state;
  const [quantity, setQuantity] = useState(1.0);
  const [product, setProduct] = useState({
    id: 0,
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    rating: {
      rate: 0,
      count: 0,
    },
  });
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${from}`)
      .then((res) => res.json())
      .then((result) => {
        setProduct(result);
      });
  }, []);
  function increaseQuantity() {
    setQuantity((prevValue) => prevValue + 1);
  }
  function decreaseQuantity() {
    if (quantity > 1) setQuantity((prevValue) => prevValue - 1);
  }
  function addToCart() {
    let products = [];
    let total = 0.0;
    if (JSON.parse(localStorage.getItem("products")) !== null) {
      products = JSON.parse(localStorage.getItem("products"));
      total = JSON.parse(localStorage.getItem("total"));
    } 
    let alreadyInCart = false
    products.map((prod) => {
      if(prod.id === product.id) {
        prod.quantity += quantity
        alreadyInCart = true
      }
    })
    if(alreadyInCart === false) {
      products.push({ quantity: quantity, ...product });
    }
      localStorage.setItem("products", JSON.stringify(products));
      localStorage.setItem("total", JSON.stringify(Math.round((total + (product.price*quantity))*100)/100))

    window.location = "/cart";
  }

  return (
    <div className={classes.container}>
      <Product
        key={product.id}
        img={product.image}
        title={product.title}
        price={product.price}
        description={product.description}
        rate={product.rating.rate}
        count={product.rating.count}
      ></Product>
      <div className={classes.box}>
        <p className={classes.p}>Quantity</p>
        <div className={classes.quantity}>
          <button
            onClick={() => decreaseQuantity(product.id)}
            className={classes.button}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => increaseQuantity(product.id)}
            className={classes.button}
          >
            +
          </button>
        </div>
        <button className={classes.add} onClick={addToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
}
export default ProductPage;
