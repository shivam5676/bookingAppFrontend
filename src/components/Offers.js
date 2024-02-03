import offercss from "./Offers.module.css";
import herobg from "./images/herobg.jpg";
const Offers = () => {
  return (
    <div className="container-fluid mx-0">
      <h3 className="text-center fw-bold">Exclusive Offers</h3>
      <div className={` ${offercss.offersContainer} py-2`}>
        <div className={`${offercss.offersCard} bg-danger bg-gradient`}>
          <div className="container py-sm-2 px-sm-4 text-wrap">
            <h4 className="col text-center text-white border-bottom pb-2">
              Feb special offer
            </h4>
            <p className="col  text-white pb-2 text-wrap">
              Get 20% discount on All bookings and make Your holiday more
              beautiful
            </p>
            <p className="col  text-white pb-2 text-wrap text-end fw-bolder px-sm-5">
              use code : <span className="text-warning">My</span>india
              <span className="text-warning">20</span>
            </p>
          </div>
        </div>
        <div className={`${offercss.offersCard} bg-warning bg-gradient`}>
          <div className="container py-sm-2 px-sm-4 text-wrap">
            <h4 className="col text-center text-white border-bottom pb-2">
              Feb special offer
            </h4>
            <p className="col  text-white pb-2 text-wrap">
              Get 20% discount on All bookings and make Your holiday more
              beautiful
            </p>
            <p className="col  text-white pb-2 text-wrap text-end fw-bolder px-sm-5">
              use code : <span className="text-dark">My</span>india
              <span className="text-dark">20</span>
            </p>
          </div>
        </div>{" "}
        <div className={`${offercss.offersCard} bg-success bg-gradient`}>
          <div className="container py-sm-2 px-sm-4 text-wrap">
            <h4 className="col text-center text-white border-bottom pb-2">
              Feb special offer
            </h4>
            <p className="col  text-white pb-2 text-wrap">
              Get 20% discount on All bookings and make Your holiday more
              beautiful
            </p>
            <p className="col  text-white pb-2 text-wrap text-end fw-bolder px-sm-5">
              use code : <span className="text-warning">My</span>india
              <span className="text-warning">20</span>
            </p>
          </div>
        </div>
        <div className={`${offercss.offersCard} bg-info bg-gradient`}>
          <div className="container py-sm-2 px-sm-4 text-wrap">
            <h4 className="col text-center text-white border-bottom pb-2">
              Feb special offer
            </h4>
            <p className="col  text-white pb-2 text-wrap">
              Get 20% discount on All bookings and make Your holiday more
              beautiful
            </p>
            <p className="col  text-white pb-2 text-wrap text-end fw-bolder px-sm-5">
              use code : <span className="text-danger">My</span>india
              <span className="text-danger">20</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Offers;
