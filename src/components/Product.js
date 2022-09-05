import classes from './Product.module.css'
function Product(props) {
    return(
        <div className={classes.card}>
            <img src={props.img} alt="" className={classes.img}></img>
            <h1 className={classes.title}>{props.title}</h1>
            <p className={classes.price}>$ {props.price} USD</p>
            <p className={classes.description}>{props.description}</p>
            <p className={classes.rating}>{props.rate}  ⭐ {props.count} ratings</p>
            <button className={classes.details}>See details</button>
        </div>
    )
}
export default Product