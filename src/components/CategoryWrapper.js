import classes from './CategoryWrapper.module.css'
function CategoryWrapper(props) {
    return(
        <div className={classes.main}>
            <p className={classes.h1}>{props.categoryName}</p>
            <button className={classes.h3}>Shop Category</button>
        </div>

    )
}

export default CategoryWrapper