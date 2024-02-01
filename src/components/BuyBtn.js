import { useNavigate } from "react-router-dom";
import BuyBtncss from "./BuyBtn.module.css";
import axios from "axios";
const BuyBtn = (props) => {
  const navigate = useNavigate();
  function addItemToCart(){
console.log(props.productId)
axios
      .post(`http://localhost:4000/addItem?pid=${props.productId}`)
      .then((result) => {
        console.log(result)
        // dispatch(dataSliceActions.addproduct(result.data))
      })
      .catch((err) => console.log(err));
  
    // navigate("/cart");
  }
  return (
    <div className="container px-5 ">
      <div className={`card mx-md-5 px-md-5 bg-warning`}>
        <div className="row row-cols-1 row-cols-md-2 ">
          <div className={`col ${BuyBtncss.wrapper} mb-2 my-sm-1`}>
            <p> Amount</p>
            <h5>Rs. 30000</h5>
          </div>
          <div className="col d-flex align-items-center justify-content-center pb-1 pb-sm-0">
            <button
              className={`btn btn-outline-dark fw-bolder ${BuyBtncss.wrapper}`}
              onClick={addItemToCart}
            >
              Buy this Package
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BuyBtn;
