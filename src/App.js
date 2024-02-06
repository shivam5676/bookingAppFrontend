import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Offers from "./components/Offers";
import ProductOverView from "./components/OrderOverView";
import Services from "./components/Services";
// import Cart from "./components/CartItem";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import { cartSliceActions } from "./store/cart";
import Orders from "./components/orders";
import CartItem from "./components/CartItem";
import Login from "./components/login";
import SignUp from "./components/signUp";

function App() {
  const dispatch = useDispatch();
 const login=useSelector(state=>state.login.islogin)
 const domain=process.env.REACT_APP_BACKENDURL

  useEffect(() => {
    axios
      .get(`${domain}/fetchCart`,{
        headers: {
          'Authorization': localStorage.getItem("token"),
        },
      })
      .then((result) => {
        // setProductDescription(result.data);
        result.data.forEach((current) => {
          dispatch(cartSliceActions.addProductInCart(current));
        });
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <Routes>
        {login ? (
          <>
            <Route path="/cart" element={<CartItem></CartItem>}></Route>
            <Route path="/order" element={<Orders></Orders>}></Route>
            <Route
              path="/product/:productid"
              element={<ProductOverView></ProductOverView>}
            ></Route>
            <Route
              path="*"
              element={
                <>
                  <NavBar></NavBar>
                  <Hero></Hero>
                  <Offers></Offers>
                  <Services></Services>
                </>
              }
            ></Route>
          </>
        ) : (
          <>
          <Route
              path="/"
              element={
                <>
                  <NavBar></NavBar>
                  <Hero></Hero>
                  <Offers></Offers>
                  <Services></Services>
                </>
              }
            ></Route>
            <Route path="/signup" element={<SignUp></SignUp>}></Route>
            <Route path="*" element={<Login></Login>}></Route>
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
