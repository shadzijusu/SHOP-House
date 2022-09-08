import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home"
import About from "./components/About"
import Footer from './components/Footer'
import Shop from './components/Shop'
import ProductPage from "./components/ProductPage";
import ShopCategory from "./components/ShopCategory";
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
        </Routes>
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
