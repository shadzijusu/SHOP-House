import { useEffect, useState } from "react";
import classes from "../modules/Cart.module.css";
import Product from "./Product";
function Cart() {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [cartData, setCartData] = useState({
    id: 0,
    userId: 0,
    date: Date(),
    products: [
      {
        productId: 0,
        quantity: 0,
      },
    ],
  });

  useEffect(() => {
    fetch("https://fakestoreapi.com/carts/1")
      .then((res) => res.json())
      .then((result) => {
        setCartData(result);
        setLoaded(true);
      });
  }, []);
  useEffect(() => {
    cartData.products.forEach((product) => {
      if (product.productId !== 0) {
        fetch(`https://fakestoreapi.com/products/${product.productId}`)
          .then((res) => res.json())
          .then((result) => {
            setProducts((previousState) => [
              ...previousState,
              { quantity: product.quantity, ...result },
            ]);
          });
      }
    });
  }, [loaded]);
  
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
          <button className={classes.delete}>Delete product</button>
            </div>

        </div>
      ))}
      </div>
      <div className={classes.total}>
        <h1>Subtotal $150.55</h1>
        <button className={classes.done}>Proceed to checkout</button>
      </div>
    </div>
    </>
  );
}
export default Cart;
