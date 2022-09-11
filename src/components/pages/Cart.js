import { useEffect, useState } from "react";
import classes from "../modules/Cart.module.css";
import Product from "./Product";
import React from 'react';

function Cart() {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products")) || []);
  const [total, setTotal] = useState(JSON.parse(localStorage.getItem("total")) || 0);
  const [changeStorage, setChangeStorage] = useState(false);
  
  useEffect(() => {
    localStorage.clear()
    localStorage.setItem("products", JSON.stringify(products));
    localStorage.setItem("total", JSON.stringify(total));
  }, [changeStorage])
  
  function deleteProduct(productId, price, quantity) {
    let filteredProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(filteredProducts);
    setTotal((previousState) => previousState - (price*quantity));
    setChangeStorage(true)
    window.location = "/cart"
  }
  return (
    <>
      <h1 className={classes.h1}>My cart</h1>
      <div className={classes.container}>
        <div className={classes.products}>
          {products.map((product) => (
            <div className={classes.main}>
              <Product
                key={product.id}
                id={product.id}
                img={product.image}
                title={product.title}
                price={product.price}
                description={product.description}
                rate={product.rating.rate}
                count={product.rating.count}
                hide={true}
              ></Product>
              <div className={classes.actions}>
                <div className={classes.quantity}>
                  <span>Qty: {product.quantity}</span>
                </div>
                <button
                  className={classes.delete}
                  onClick={() => deleteProduct(product.id, product.price, product.quantity)}
                >
                  Delete product
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className={classes.total}>
          <h1 className={classes.totalText}>Subtotal ${total}</h1>
          <button className={classes.done}>Proceed to checkout</button>
        </div>
      </div>
    </>
  );
}
export default Cart;
