import { Route, Routes } from "react-router-dom";
import Navbar from "./../src/component/navbar/Navbar";
import Footer from "./component/footer/Footer";
import Home from "./component/home/Home";
import AddProduct from "./component/add-product/AddProduct";
import Cart from "./component/cart/Cart";
import Profile from "./component/profile/Profile";
import Register from "./component/register/Register";
import Login from "./component/login/Login";
import Men from "./component/multiple/Men";
import Women from "./component/multiple/Women";
import Kids from "./component/multiple/Kids";
import HomenKitchen from "./component/multiple/HomenKitchen";
import Beauty from "./component/multiple/Beauty";

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
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/men" element={<Men />} />
        <Route exact path="/women" element={<Women />} />
        <Route exact path="/kids" element={<Kids />} />
        <Route exact path="/homenkitchen" element={<HomenKitchen />} />
        <Route exact path="/beauty" element={<Beauty />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
