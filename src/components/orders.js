import axios from "axios";
import { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const domain=process.env.REACT_APP_BACKENDURL
  const navigate = useNavigate();
  const [itemArray, setItemArray] = useState([]);
  useEffect(() => {
    axios
    .get(`${domain}/fetchOrders?userid=${1}`, {
      headers: {
        'Authorization': localStorage.getItem("token"),
      },
    })
      .then((res) => {
        const newArray = res.data.map((current) => {
          const orderDate = new Date(current.createdAt).toLocaleString();
          return (
            <div
              className="row row-cols-2 row-cols-3 border mt-3 text-wrap"
              style={{ boxShadow: "2px 2px 5px black" }}
              key={current.id}
            >
              <div className="col-4 border-bottom">
                <img
                  src={current.image}
                  style={{ height: "150px", width: "100%" }}
                ></img>
              </div>
              <div className="col-8 col-sm-6 border-bottom">
                <h5 className="fw-bolder text-wrap text-center">
                  {current.name}
                </h5>
                <p className="fw-bolder text-wrap text-center">
                  TotalAmount : {current.payable}
                </p>
                <h6 className="fw-bolder text-wrap text-center">
                  Order-Date :{" "}
                  <span className=" text-wrap text-warning">{orderDate}</span>{" "}
                </h6>
              </div>
              <div className="col-6 col-sm-2 border-bottom fw-bold">
                Qty: <span className="fw-lighter">{current.quantity}</span>
              </div>
              <div className="col-6 col-sm-12 border-bottom fw-bold badge bg-danger ">
                <h6 className="fw-lighter py-2">{current.status}</h6>
              </div>
              <div className="col-12 col-md-5 border-bottom fw-bold text-wrap">
                OrderId : <span className="fw-lighter">{current.orderId}</span>
              </div>
              <div className="col-12 col-md-5 fw-bold text-wrap">
                PaymentId :{" "}
                <span className="fw-lighter">{current.paymentId}</span>
              </div>
            </div>
          );
        });
        setItemArray(newArray);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container-fluid">
      <div className="container-fluid fixed-top border text-center d-flex justify-content-between bg-warning text-white fw-bolder">
        <IoMdArrowRoundBack
          className="mt-1 ms-2"
          style={{ height: "30px", width: "30px" }}
          onClick={() => navigate(-1)}
        />
        <h3>Orders</h3>
        <h3
          className="mt-1 ms-2"
          style={{ height: "30px", width: "30px" }}
        ></h3>
      </div>
      <div className="container pt-5">{itemArray}</div>
    </div>
  );
};
export default Orders;
