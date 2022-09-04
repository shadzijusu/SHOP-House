import classes from './Home.module.css'
import CategoryWrapper from './CategoryWrapper';
function Home() {

  return (
    <div>
    <div className={classes.main}>
      <h1>Find it, love it, buy it.</h1>
      <h2>A few clicks is all it takes.</h2>
      <button className={classes.btnShop}>Shop Collection</button>
    </div>

    <div className={classes.categories}>
     <CategoryWrapper categoryName={"Women's Clothing"}></CategoryWrapper>
     <CategoryWrapper categoryName={"Men's Clothing"}></CategoryWrapper>
     <CategoryWrapper categoryName={"Electronics"}></CategoryWrapper>
     <CategoryWrapper categoryName={"Jewelery"}></CategoryWrapper>
    

    </div>
    </div>
  );
}
export default Home;
