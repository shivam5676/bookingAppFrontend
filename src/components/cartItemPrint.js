import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import CartPayment from "./cartPayment";

const CartItemPrint = () => {
  const statecart = useSelector((current) => current.cart.cartItem);
  const [cartData, setCartData] = useState(null);
  const [totalAmount, setTotalAmount] = useState(0);
  const [couponApply,setCouponApply]=useState("0%")
  const [productIdArray,setProductIdArray]=useState([]);
  const couponRef = useRef("");
  const couponHandler = () => {
    axios
      .get(
        `http://localhost:4000/couponVerify?coupon=${couponRef.current.value}`
      )
      .then((res) => {
        setCouponApply(res.data.data)
      })
      .catch((err) => console.log(err));
  };
  // const paymentHandler=()=>{
  //   console.log(productIdArray)
  //   axios
  //     .post(
  //       `http://localhost:4000/order?coupon=${couponRef.current.value}`,productIdArray
  //     )
  //     .then((res) => {
  //       console.log(res)
  //     })
  //     .catch((err) => console.log(err));
  // }
  // console.log(statecart)

  useEffect(() => {
    let total = 0;
    const arrayData = statecart.map((current) => {
setProductIdArray((prev)=>[...prev,current.id])
      total = current.quantity * current.product.price + total;

      return (
        <div className=" card border-success mb-2" key={Math.random()}>
          <div className="row row-cols-2" style={{ height: "100px" }}>
            <div className="col-4 col-sm-3 border-end">
              <img
                className=""
                src={current.product.image}
                alt="image"
                style={{
                  height: "100px",
                  width: "100%",
                  objectFit: "cover", // This property ensures the image covers the container while maintaining its aspect ratio
                  objectPosition: "center", // This property centers the image within the container
                }}
              ></img>
            </div>
            <div className="col-5 col-sm-6 text-wrap">
              <p className="fw-bolder py-0">{current.product.name}</p>
              <p className="text-wrap py-0">price : {current.product.price}</p>
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
    
    setCartData(arrayData);
    setTotalAmount(total);
  }, [statecart]);
  console.log(productIdArray)
  return (
    <>
      <div className="container fixed-top border text-center">
        <h3>Cart</h3>
      </div>
      <div
        className="container  text-center mb-5 "
        style={{ paddingBottom: "30vh" }}
      >
        <div className=" p-1 p-m-5 mt-5">{cartData}</div>
      </div>
      <div className="container fixed-bottom border pt-2 bg-dark">
        <div className="row row-cols-1 row-cols-sm-2 pb-3 ">
          <div className="col  text-white text-center pb-3">
            <input
              placeholder="enter coupon code"
              className=""
              ref={couponRef}
            ></input>
            <span>
              <button className="btn btn-success m-2" onClick={couponHandler}>
                Apply
              </button>
            </span>
          </div>
          <div className="col d-flex  justify-content-center align-items-center text-white text-center pb-3">
            <div className="row row-cols-1 ">
              <p className="col">Total Amount : {totalAmount}</p>
              {couponApply=="0%"?<p className="col">coupon : no coupon</p>:<p className="col">coupon : {couponApply}</p>}
              <h4 className="col">{` payable : ${
                (totalAmount * (100 - couponApply.replace("%",""))) / 100
              }`}</h4>
            </div>
          </div>
          
          {productIdArray&&<CartPayment coupon={couponRef.current.value} productIdArray={productIdArray}></CartPayment>}
        </div>
      </div>
    </>
  );
};
export default CartItemPrint;