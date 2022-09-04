import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home"
import Footer from './components/Footer'
function App() {
  return (
      <div className="App">
      <BrowserRouter>
        <Header></Header>
        <div className="container">
        <Routes>
            <Route path="/" element={<Home />} />
            
        </Routes>
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
