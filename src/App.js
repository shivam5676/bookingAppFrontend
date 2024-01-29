import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Offers from "./components/Offers";
import ProductOverView from "./components/OrderOverView";
import Services from "./components/Services";
import Cart from "./components/Cart";

function App() {
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
