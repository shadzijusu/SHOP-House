import classes from "./Shop.module.css";
import Product from "./Product";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
function ShopCategory() {
  const location = useLocation()
  const {from} = location.state
  const [categoryProducts, setCategoryProducts] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${from}`)
      .then((res) => res.json())
      .then((result) => {
        setCategoryProducts(result);
      });
  }, []);

  return (
    <div>
    <h1 className={classes.category}>{from}</h1>
      <div className={classes.container}>
        {categoryProducts.map((product) => (
          <Product
            key={product.id}
            img={product.image}
            title={product.title}
            price={product.price}
            description={product.description}
            rate={product.rating.rate}
            count={product.rating.count}
          ></Product>
        ))}
      </div>
    </div>
  );
}
export default ShopCategory;
