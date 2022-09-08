import Product from "./Product"
import { useLocation } from "react-router-dom"
import classes from "../modules/ProductPage.module.css"
import {useEffect, useState} from "react"
import NumericInput from 'react-numeric-input';

function ProductPage() {
    const location = useLocation()
    const {from} = location.state
    const [product, setProduct] = useState( {id: 0,
        title: "",
        price: "",
        description: "",
        category: "",
        image: "",
        rating: {
            rate: 0,
            count: 0
        }
    })
    useEffect(() => {
        console.log(from)
        fetch(`https://fakestoreapi.com/products/${from}`)
          .then((res) => res.json())
          .then((result) => {
            setProduct(result);
          });
      }, []);
    return(
        <div className={classes.container}>
        <Product key={product.id}
        img={product.image}
        title={product.title}
        price={product.price}
        description={product.description}
        rate={product.rating.rate}
        count={product.rating.count}></Product>
        <div className={classes.box}>
        <p className={classes.p}>Quantity</p>
        <NumericInput min={1} max={5} value={1} className={classes.quantity}></NumericInput>
        </div>

        </div>
    )
}
export default ProductPage