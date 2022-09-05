import classes from "./Home.module.css";
import CategoryWrapper from "./CategoryWrapper";
import { useEffect, useState } from "react";
function Home() {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProductData(data)
      });
  }, []);
  return (
    <div>
      <div className={classes.main}>
        <h1>Find it, love it, buy it.</h1>
        <h2>A few clicks is all it takes.</h2>
        <button className={classes.btnShop}>Shop Collection</button>
      </div>

      <div className={classes.categories}>
        <CategoryWrapper categoryName={"Women's Clothing"}></CategoryWrapper>
        <CategoryWrapper categoryName={"Men's Clothing"}></CategoryWrapper>
        <CategoryWrapper categoryName={"Electronics"}></CategoryWrapper>
        <CategoryWrapper categoryName={"Jewelery"}></CategoryWrapper>
      </div>
      {
        console.log(productData)
    
        //add highest rated products with view details which opens product page
      }
    </div>
  );
}
export default Home;
