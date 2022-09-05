function Product(props) {
    return(
        <div>
            <img src={props.img} alt=""></img>
            <h1>{props.title}</h1>
            <p>{props.price}</p>
            <p>{props.description}</p>
            <p>{props.rating} {props.count} ratings</p>
        </div>
    )
}
export default Product