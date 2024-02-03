import axios from "axios";

const CartPayment = (props) => {
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

    // Make API call to the serverless API
    // const data = await axios.get(`${domain}/premiumuser/activateMembership`, {
    //   headers: { Authorization: localStorage.getItem("token") },
    // });

    // var options = {
    //   key: data.data.key_id, // Enter the Key ID generated from the Dashboard
    //   name: "fundsTracker (By-shivam singh)",

    //   order_id: data.data.order.id,
    //   description: "Thanks for taking pro membership",

    //   handler: async function (response) {
    //     // Validate payment at server - using webhooks is a better idea.
    //     try {
    //       console.log("posting started");
    //       await axios.post(
    //         `${domain}/premiumuser/updateMembership`,
    //         {
    //           order_id: options.order_id,
    //           payment_id: response.razorpay_payment_id,
    //         },
    //         {
    //           headers: { Authorization: localStorage.getItem("token") },
    //         }
    //       );
    //       localStorage.setItem("isPremium", true); //later we have to replace this localstorage to context direct fetch method when user reload the page then it should be saved in context
    //       toast.success("payment done, u are a pro member");
    //       dispatch(loginSliceActions.premium());
    //     } catch (err) {
    //       console.log(err);
    //       // toast.error(err);
    //     }
    //   },
    //   prefill: {
    //     name: "shivam singh",
    //     email: "shivam.handler@gmail.com",
    //     contact: "9559923286",
    //   },
    // };

    axios
      .post(
        `http://localhost:4000/order?coupon=${props.coupon}`,
        props.productIdArray
      )
      .then((data) => {
        console.log(data)
        var options = {
          key: data.data.key_id, // Enter the Key ID generated from the Dashboard
          name: "fundsTracker (By-shivam singh)",

          order_id: data.data.order,
          description:
            "Thanks for booking a trip with MyIndiaTrip.....happy Journey",

          handler: async function (response) {
            // Validate payment at server - using webhooks is a better idea.
              try {
                console.log("posting started");
                await axios.post(
                  `${domain}/premiumuser/updateMembership`,
                  {
                    order_id: options.order_id,
                    payment_id: response.razorpay_payment_id,
                  },
                  {
                    headers: { Authorization: localStorage.getItem("token") },
                  }
                );
                localStorage.setItem("isPremium", true); //later we have to replace this localstorage to context direct fetch method when user reload the page then it should be saved in context
                toast.success("payment done");
              } catch (err) {
                console.log(err);
                // toast.error(err);
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