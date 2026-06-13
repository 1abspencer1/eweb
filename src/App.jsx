import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./componects/functions/ProductPage";
import Cart from "./componects/functions/Cart";
import Nav from "./componects/Nav/Nav";
import { products } from "./componects/functions/data";
import ScrollToTop from "./componects/functions/ScrollToTop";
import Shop from "./pages/shop";
import Footer from "./componects/footer/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Login from "./pages/Login"; // ✅ your login page
import SignUp from "./pages/Sighup";
import Checkout from "./pages/Checkout";
import CategoryPage from "./pages/CategoryPage";
import CollectionPage from "./pages/CollectionPage";

function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/product/:id"
          element={<ProductPage products={products} />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/category/:name" element={<CategoryPage />} />
        <Route path="/collection/:id" element={<CollectionPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} /> {/* ✅ fixed */}
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
