import classes from "../modules/Home.module.css";
import CategoryWrapper from "./CategoryWrapper";
import { useEffect, useState } from "react";
import React from 'react';

import Product from "./Product";
function Home() {
  const [allProductData, setAllProductData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  
  function openShop() {
    window.location = "/shop";
  }
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((result) => {
        setIsLoaded(true);
        setAllProductData(result);
      });
  }, []);
  if (!isLoaded) {
    return <>loading...</>;
  } else {
    return (
      <div>
        <div className={classes.main}>
          <h1 className={classes.h1}>Find it, love it, buy it.</h1>
          <h2 className={classes.h2}>A few clicks is all it takes.</h2>
          <button className={classes.btnShop} onClick={openShop}>Shop Collection</button>
        </div>
        <div className={classes.categories}>
          <CategoryWrapper categoryName={"Women's Clothing"}></CategoryWrapper>
          <CategoryWrapper categoryName={"Men's Clothing"}></CategoryWrapper>
          <CategoryWrapper categoryName={"Electronics"}></CategoryWrapper>
          <CategoryWrapper categoryName={"Jewelery"}></CategoryWrapper>
        </div>
        <h1 className={classes.popular}>Popular products</h1>

       <div className={classes.bestProducts}>
        {
        allProductData.filter((product) => (product.rating.rate > 4.5 && product.rating.count > 350)).map((product) => (
          <Product
            key={product.id}
            id={product.id}
            img={product.image}
            title={product.title}
            price={product.price}
            description={product.description}
            rate={product.rating.rate}
            count={product.rating.count}
            hide = {true}
          ></Product>
        ))}
      </div>
      </div>
    );
  }
}
export default Home;
