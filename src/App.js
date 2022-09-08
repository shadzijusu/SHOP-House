import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Header from "../src/components/pages/Header";
import Home from "../src/components/pages/Home"
import About from "../src/components/pages/About"
import Footer from '../src/components/pages/Footer'
import Shop from '../src/components/pages/Shop'
import ProductPage from "../src/components/pages/ProductPage";
import ShopCategory from "../src/components/pages/ShopCategory";
import Cart from "../src/components/pages/Cart";
function App() {
  return (
      <div className="App">
      <BrowserRouter>
        <Header></Header>
        <div className="container">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shopcategory" element={<ShopCategory />} />
            <Route path="/product" element={<ProductPage/>} />
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
