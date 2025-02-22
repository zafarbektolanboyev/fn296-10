import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Header from "./components/Header/Header";
import Details from "./pages/Details";

function App() {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/products" element={<Products></Products>}></Route>
          <Route path="/details/:id" element={<Details></Details>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
