import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Offers from "./components/Offers";
import ProductOverView from "./components/OrderOverView";
import Services from "./components/Services";
import Cart from "./components/Cart";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { dataSliceActions } from "./store/data";
import axios from "axios";

function App() {
  // const dispatch=useDispatch()
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:4000/products")
  //     .then((result) => {
        
  //       dispatch(dataSliceActions.addproduct(result.data))
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  return (
    <div className="App">
      <Routes>
      <Route
          path="/cart"
          element={<Cart></Cart>}
        ></Route>
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
      </Routes>
    </div>
  );
}

export default App;
