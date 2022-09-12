import classes from "../modules/Home.module.css";
import CategoryWrapper from "./CategoryWrapper";
import { useEffect, useState } from "react";
import React from "react";

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
    return (
      <div className={classes.load}>
        <div className={classes.loader} title={2}>
  <svg
    version="1.1"
    id="loader-1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width="40px"
    height="40px"
    viewBox="0 0 50 50"
    style={{ enableBackground: "new 0 0 50 50" }}
    xmlSpace="preserve"
  >
    <path
      fill="#000"
      d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
    >
      <animateTransform
        attributeType="xml"
        attributeName="transform"
        type="rotate"
        from="0 25 25"
        to="360 25 25"
        dur="0.6s"
        repeatCount="indefinite"
      />
    </path>
  </svg>
</div>
      </div>
    );
  } else {
    return (
      <div>
        <div className={classes.main}>
          <h1 className={classes.h1}>Find it, love it, buy it.</h1>
          <h2 className={classes.h2}>A few clicks is all it takes.</h2>
          <button className={classes.btnShop} onClick={openShop}>
            Shop Collection
          </button>
        </div>
        <div className={classes.categories}>
          <CategoryWrapper categoryName={"Women's Clothing"}></CategoryWrapper>
          <CategoryWrapper categoryName={"Men's Clothing"}></CategoryWrapper>
          <CategoryWrapper categoryName={"Electronics"}></CategoryWrapper>
          <CategoryWrapper categoryName={"Jewelery"}></CategoryWrapper>
        </div>
        <h1 className={classes.popular}>Popular products</h1>

        <div className={classes.bestProducts}>
          {allProductData
            .filter(
              (product) =>
                product.rating.rate > 4.5 && product.rating.count > 350
            )
            .map((product) => (
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
            ))}
        </div>
      </div>
    );
  }
}
export default Home;
