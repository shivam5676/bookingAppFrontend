import axios from "axios";
import { useDispatch } from "react-redux";
import { cartSliceActions } from "../store/cart";
import { toast } from "react-toastify";

const CartPayment = (props) => {
  const dispatch = useDispatch();
  const domain=process.env.REACT_APP_BACKENDURL
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };
  const paymentHandler = async () => {
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    axios
      .post(`${domain}/createorder?coupon=${props.coupon}`, {
        productIdArray: props.productIdArray,
        coupon: props.coupon,
      })
      .then((data) => {
        console.log(data);
        var options = {
          key: data.data.key_id, // Enter the Key ID generated from the Dashboard
          name: "MyIndiaTrip",

          order_id: data.data.order,
          description:
            "Thanks for booking a trip with MyIndiaTrip.....happy Journey",

          handler: async function (response) {
            // Validate payment at server - using webhooks is a better idea.
            try {
             
              await axios.post(
                `${domain}/successfulOrder?orderId=${data.data.order}`,
                {
                  order_id: options.order_id,
                  payment_id: response.razorpay_payment_id,
                },
                {
                  headers: {
                    'Authorization': localStorage.getItem("token"),
                  },
                }
              )
              localStorage.setItem("isPremium", true); //later we have to replace this localstorage to context direct fetch method when user reload the page then it should be saved in context
          
              dispatch(cartSliceActions.clearCart("aaaa"));
              toast.success("order successfully placed ,check order section...")
            } catch (err) {
              console.log(err);
              toast.error("payment not made ,see ur payment status in order tab");
              dispatch(cartSliceActions.clearCart("aaaa"));
            }
          },
          prefill: {
            name: "shivam singh",
            email: "shivam.handler@gmail.com",
            contact: "9559923286",
          },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="col d-flex align-items-center justify-content-center w-100">
      <button className="btn btn-outline-warning" onClick={paymentHandler}>
        proceed to payment
      </button>{" "}
    </div>
  );
};
export default CartPayment;
