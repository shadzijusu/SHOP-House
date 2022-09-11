import classes from '../modules/Product.module.css'
import {Link} from "react-router-dom"
import React from 'react';

function Product(props) {
    return(
        <div className={classes.card} style={{height: props.hide ? "400px" : "700px"}}>
             {
            props.hide ?
            <Link to="/product"  state={{ from: props.id }} className={classes.h3}>See details</Link> : <></>
            }
            <img src={props.img} alt="" className={classes.img}></img>
            <h1 className={classes.title}>{props.title}</h1>
            <p className={classes.price}>$ {props.price} USD</p>
            {props.hide ? <></> :
            <p className={classes.description}>{props.description}</p>
            }
            {
                props.hide ? <></> :
            <p className={classes.rating}>{props.rate}  <span role="img" aria-label="star">⭐</span> {props.count} ratings</p> 
            }
        </div>
    )
}
export default Product