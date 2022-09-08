import classes from '../modules/Footer.module.css'
import logo from '../../images/logo.png'
function Footer() {
return(
    <div className={classes.main}>
        <img src={logo} alt=""></img>
        <h1 className={classes.h1}>Free shipping on all orders over $100.</h1>
    </div>
)
}
export default Footer