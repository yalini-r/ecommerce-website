import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/shop";
import ShopCategory from "./pages/shopcategory";
import Product from "./pages/product";
import Cart from "./pages/cart";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Footer from "./components/footer/footer";
import men_bnr from "./components/assets/banner_mens.png";
import women_bnr from "./components/assets/banner_women.png";
import kids_bnr from "./components/assets/banner_kids.png";
import About from "./pages/about";
import AllProducts from "./pages/allpd";
import Contact from "./pages/contact";
import Checkout from "./components/checkout/chechout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCategory bnr={men_bnr} category="men" />}
          />
          <Route
            path="/womens"
            element={<ShopCategory bnr={women_bnr} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory bnr={kids_bnr} category="kid" />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
