import { useNavigate } from "react-router-dom";
import BuyBtncss from "./BuyBtn.module.css";
import axios from "axios";
import { cartSliceActions } from "../store/cart";
import { useDispatch } from "react-redux";
import { useState } from "react";
const BuyBtn = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [purchased, setPurchased] = useState(false);
  function addItemToCart() {
    
    axios
      .post(`http://localhost:4000/addItem?pid=${props.productId}`,null ,{
        headers: {
          'Authorization': localStorage.getItem("token"),
        },
      })
      .then((result) => {
        // console.log(result)
        dispatch(cartSliceActions.addProductInCart(result.data));
        setPurchased(true);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="container px-5 ">
      <div className={`card mx-md-5 px-md-5 bg-warning`}>
        <div className="row row-cols-1 row-cols-md-2 ">
          <div className={`col ${BuyBtncss.wrapper} mb-2 my-sm-1`}>
            <p className="fw-bolder"> Amount</p>
            <h5>{props.price}</h5>
          </div>
          <div className="col d-flex align-items-center justify-content-center pb-1 pb-sm-0">
            {!purchased ? (
              <button
                className={`btn btn-outline-dark fw-bolder ${BuyBtncss.wrapper}`}
                onClick={addItemToCart}
              >
                Buy this Package
              </button>
            ) : (
              <button
                className={`btn btn-success fw-bolder ${BuyBtncss.wrapper}`}
                disabled
              >
                Added to cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default BuyBtn;
