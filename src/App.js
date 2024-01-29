import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Offers from "./components/Offers";
import ProductOverView from "./components/OrderOverView";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <Routes>
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
