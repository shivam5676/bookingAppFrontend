import { useNavigate } from "react-router-dom";
import printcss from "./printServices.module.css"
import { FaCar, FaHotel, FaSwimmingPool } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
const PrintServices = (props) => {
  const navigate = useNavigate();
  // console.log(props)
  const productArray = useSelector((state) => {
    return state.data.products;
  });
  console.log(productArray);
  const dataArray = productArray.map((current) => {
    console.log(current.name);
    let places;
    {
       places = current.packageInclude.places.map(
        (currentplace, index) => {
          return (
            <p className="ps-2 my-0" key={index}>
              {currentplace}
            </p>
          );
        }
      );
    }
    return (
      <div className="col " key={current.id}>
        <div
          className={`card shadow bg-body-tertiary mt-3 `}
          onClick={() => {
            navigate(`/product/${current.id}`,{state:current.packageInclude});
          }}
        >
          <img
            src={current.image}
            height={"200px"}
            className="img pb-1"
            draggable="false"
          ></img>

          <div className={ `border-bottom d-flex justify-content-between px-1 `}>
            <h3 className="px-1">{current.name}</h3>
            <span className="px-1 fw-lighter">{current.packageInclude.Duration}</span>
          </div>

          <div className="row row-cols-2">
            <div className="col border-end py-1 ">
              {places}
            </div>
            <div className="col ">
              <p className="ps-2 my-0 fw-bold">
                <FaSwimmingPool /> swimming pool
              </p>
              <p className="ps-2 my-0 fw-bold">
                <IoFastFoodOutline /> food
              </p>
              <p className="ps-2 my-0 fw-bold">
                <FaHotel /> hotel
              </p>
              <p className="ps-2 my-0 fw-bold">
                <FaCar /> vehicle facility
              </p>
            </div>
          </div>
          <hr className="py-0 my-0"></hr>
          <div className="row row-cols-2">
            <div className="col ">
              <p className="ps-2 my-0 ">
                Starting from{" "}
                <span className="  badge rounded-pill bg-danger ">
                  per person
                </span>
              </p>
              <h4 className="my-0 p-2 font-weight-bold">{`₹ ${current.price}`}</h4>
            </div>
            <div className="col d-flex justify-content-center align-items-center ">
              <button
                type="button"
                className="btn btn-outline-warning me-1 fw-bold"
                onClick={() => {
                  navigate(`/product/${current.id}`);
                }}
              >
                View & Order
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="container">
      {/* <h3 className="text-center fw-bold">Latest Tourist Spot</h3>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-4">
        <div className="col">
          <div className="card mt-3 " onClick={()=>{navigate("/product/2345")}}>
            <img
              src={herobg}
              height={"200px"}
              className="img pb-1"
              draggable="false"
            ></img>

            <div className=" border-bottom text-center">
              <h3>lakshyadeep tour</h3>
            </div>

            <div className="row row-cols-2">
              <div className="col border-end py-1 ">
                <p className="ps-2 my-0">1N COCHIN</p>
                <p className="ps-2 my-0">1N ANDAMAN</p>
                <p className="ps-2 my-0">1N COCHIN</p>
              </div>
              <div className="col ">
                <p className="ps-2 my-0">icons related sightview</p>
              </div>
            </div>
            <hr className="py-0 my-0"></hr>
            <div className="row row-cols-2">
              <div className="col ">
                <p className="ps-2 my-0 ">
                  Starting from{" "}
                  <span class="  badge rounded-pill bg-danger ">
                    per person
                  </span>
                </p>
                <h4 className="my-0 p-2 font-weight-bold">₹ 350000</h4>
              </div>
              <div className="col d-flex justify-content-center align-items-center ">
                <button
                  type="button"
                  class="btn btn-outline-warning me-1 fw-bold"
                  onClick={() => {
                    navigate("/product/2345");
                  }}
                >
                  View & Order
                </button>
              </div>
            </div>
          </div>
        </div>
     
      </div> */}
      <h3 className="text-center fw-bold" key={Math.random()}>
        Latest Tourist Spot
      </h3>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-4 pb-1">
        {dataArray}
      </div>
    </div>
  );
};
export default PrintServices;
