import classes from "../modules/Shop.module.css";
import Product from "./Product";
import { useState, useEffect } from "react";
function Shop() {
  const [allProductData, setAllProductData] = useState([]);


  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((result) => {
        setAllProductData(result);
      });
  }, []);
  const handleClick = async (category) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/category/${category}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });


      const result = await response.json();

      console.log('result is: ', JSON.stringify(result, null, 4));
      setAllProductData(result)

    } catch (err) {
        console.log(err)
    }
  };

  return (
    <div>
        <div className={classes.categories}>
        <h1 className={classes.h1}>Shop by category</h1>
        <button className={classes.button} onClick={() => handleClick("women's clothing")}>Women's Clothing</button>
        <button className={classes.button} onClick={() => handleClick("men's clothing")}>Men's Clothing</button>
        <button className={classes.button} onClick={() => handleClick("electronics")}>Electronics</button>
        <button className={classes.button} onClick={() => handleClick("jewelery")}>Jewelery</button>
        </div>
 <div className={classes.container}>

      {allProductData.map((product) => (
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
export default Shop;
