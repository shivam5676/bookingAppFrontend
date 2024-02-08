import offercss from "./Offers.module.css";

const Offers = () => {
  return (
    <div className="container-fluid mx-0">
      <h3 className="text-center fw-bold">Exclusive Offers</h3>
      <div className={` ${offercss.offersContainer} py-sm-2`}>
        <div className={`${offercss.offersCard} bg-danger bg-gradient `}>
          <div className="container py-sm-2 px-sm-4 text-wrap">
            <h4 className="col text-center text-white border-bottom pb-2">
              MyIndiaTrip special offer *20% off
            </h4>
            <p className="col  text-white pb-2 text-wrap">
              Get 20% discount on All bookings and make Your holiday more
              beautiful
            </p>
            <p className="col  text-warning pb-2 text-wrap text-end fw-bolder px-sm-5">
              use code : <span className="text-white">my</span>india
              <span className="text-white">20</span>
            </p>
          </div>
        </div>
        <div className={`${offercss.offersCard} bg-dark bg-gradient `}>
          <div className="container py-sm-2 px-sm-4 text-wrap">
            <h4 className="col text-center text-white border-bottom pb-2">
              MyIndiaTrip special offer *50% off
            </h4>
            <p className="col  text-white pb-2 text-wrap">
              Get 50% discount on All bookings and make Your holiday more
              beautiful
            </p>
            <p className="col  text-warning pb-2 text-wrap text-end fw-bolder px-sm-5">
              use code : <span className="text-white">sh</span>iv
              <span className="text-white">am</span>
            </p>
          </div>
        </div>{" "}
        <div className={`${offercss.offersCard} bg-success bg-gradient`}>
          <div className="container py-sm-2 px-sm-4 text-wrap">
            <h4 className="col text-center text-white border-bottom pb-2">
              MyIndiaTrip special offer *30% off
            </h4>
            <p className="col  text-white pb-2 text-wrap">
              Get 30% discount on All bookings and make Your holiday more
              beautiful
            </p>
            <p className="col  text-white pb-2 text-wrap text-end fw-bolder px-sm-5">
              use code : <span className="text-warning">Be</span>autiful
              <span className="text-warning">india</span>
            </p>
          </div>
        </div>
        <div className={`${offercss.offersCard} bg-dark bg-gradient`}>
          <div className="container py-sm-2 px-sm-4 text-wrap">
            <h4 className="col text-center text-white border-bottom pb-2">
              MORE COUPONS ARE COMING.......
            </h4>
            <p className="col  text-white pb-2 text-wrap">
              till then enjoy booking with MyindiaTrip and dont foget to use coupons
            </p>
            <p className="col  text-white pb-2 text-wrap text-end fw-bolder px-sm-5">
              happy <span className="text-warning">Boo</span>king
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Offers;
