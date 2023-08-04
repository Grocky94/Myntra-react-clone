import { Route, Routes } from "react-router-dom";
import Navbar from "./../src/component/navbar/Navbar";
import Footer from "./component/footer/Footer";
import Home from "./component/home/Home";
import AddProduct from "./component/add-product/AddProduct";
import Cart from "./component/cart/Cart";
import Profile from "./component/profile/Profile";
import Register from "./component/register/Register";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/addproduct" element={<AddProduct />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
