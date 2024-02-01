import axios from "axios";
import { useEffect, useState } from "react";

const Cart = () => {
  const [cartData, setCartData] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/fetchCart`)
      .then((result) => {
        // setProductDescription(result.data);
        const newobj = {};
        const arrayData = result.data.map((current) => {
          //   console.log(current);
          //   if (current.productId == newobj[current.productId]) {
          //     console.log(newobj);
          //     newobj[current.productId] =
          //       newobj[current.productId].quantity + current.quantity;
          //   } else {
          //     newobj[current.productId] = current;
          //   }
          //   console.log(newobj);

          return (
            <div className=" card border-success mb-2" key={Math.random()}>
              <div className="row row-cols-2" style={{ height: "100px" }}>
                <div className="col-4 col-sm-3 border-end">
                  <img
                    className=""
                    src={current.image}
                    alt="image"
                    style={{
                      height: "100px",
                      width: "100%",
                      objectFit: "cover", // This property ensures the image covers the container while maintaining its aspect ratio
                      objectPosition: "center", // This property centers the image within the container
                    }}
                  ></img>
                </div>
                <div className="col-5 col-sm-6 ">
                  <h5>{current.name}</h5>
                  <h4>{current.amount}</h4>
                </div>
                <div className="col-3 col-sm-2">
                  <p>Qty</p>
                  <input
                    type="number"
                    step="2"
                    style={{ width: "100%" }}
                    value={current.quantity}
                  ></input>
                </div>
              </div>
            </div>
          );
        });
        console.log(arrayData);
        setCartData(arrayData);
        // setCartData(result.data)
      })

      .catch((err) => console.log(err));
  }, []);
  console.log(cartData);
  return (
    <>
      <div className="container fixed-top border text-center">
        <h3>Cart</h3>
      </div>
      <div className="container  text-center mb-5 ">
        <div className=" p-1 p-sm-5 mt-5">
          {cartData}
          {/* <div className=" card border-success mb-2">
            <div className="row row-cols-2" style={{ height: "100px" }}>
              <div className="col-4 col-sm-3 border-end">
                <img alt="image"></img>
              </div>
              <div className="col-5 col-sm-6 ">
                <h5>product name</h5>
                <h4>Amount</h4>
              </div>
              <div className="col-3 col-sm-2">
                <p>Qty</p>
                <input type="number" step="2" style={{ width: "100%" }}></input>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="container fixed-bottom border pt-5 ">
        <div className="row row-cols-1 row-cols-sm-2 py-3">
          <div className="col d-flex align-items-center justify-content-center">
            <h4>Total Amount</h4>{" "}
          </div>
          <div className="col d-flex align-items-center justify-content-center">
            <button className="btn btn-outline-warning">
              proceed to payment
            </button>{" "}
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
