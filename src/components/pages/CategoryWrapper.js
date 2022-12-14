import classes from "../modules/CategoryWrapper.module.css";
import { Link } from "react-router-dom";
import React from 'react';

function CategoryWrapper(props) {
  const name = props.categoryName.toLowerCase()
  return (
    <div className={classes.main}>
      <p className={classes.h1}>{props.categoryName}</p>
        <Link to="/shopcategory"  state={{ from: name }} className={classes.h3}>Shop Category</Link>
    </div>
  );
}

export default CategoryWrapper;
