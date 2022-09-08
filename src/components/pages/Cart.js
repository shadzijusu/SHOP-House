import { useEffect, useState } from "react";
import Product from "./Product";
function Cart() {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false)
  const [cartData, setCartData] = useState({
    id: 0,
    userId: 0,
    date: Date(),
    products: [
      {
        productId: 0,
        quantity: 0,
      }
        ],
  });
 
  useEffect(() => {
    fetch("https://fakestoreapi.com/carts/1")
      .then((res) => res.json())
      .then((result) => {
        setCartData(result);
        setLoaded(true)
      });
  }, []);
  useEffect(() => {
    console.log("Firing")
    cartData.products.forEach((product) => {
        if(product.productId !== 0) {
            fetch(`https://fakestoreapi.com/products/${product.productId}`)
            .then((res) => res.json())
            .then((result) => {
                setProducts(previousState => ([...previousState, {quantity: product.quantity, ...result}]))

            })
        }
    })
  }, [loaded])
 

  return (
  <div>
    

    {
        products.map((product) => (
            <div>
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
            >
            </Product>
              <p>{product.quantity}</p>
              </div>
        ))
    }
    
    
    
    
    </div>
  )
}
export default Cart;
