import { useParams } from "react-router-dom";
import BuyBtn from "./BuyBtn";

import ProductOverViewHeader from "./productOverViewHeader";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { FaCar, FaClock, FaHotel, FaSwimmingPool } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";
import { IoMdLocate } from "react-icons/io";
import { ThreeCircles } from "react-loader-spinner";
const ProductOverView = () => {
  const dispatch = useDispatch();
  const domain = process.env.REACT_APP_BACKENDURL;
  const params = useParams();

  const [productDescription, setProductDescription] = useState(null);
  useEffect(() => {
    axios
      .get(`${domain}/productDetails/${params.productid}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((result) => {
        setProductDescription(result.data);
        let caraouselArray;
      })

      .catch((err) => console.log(err));
  }, []);
  console.log(productDescription);
  return (
    <>
      {productDescription ? (
        <div className="container-fluid py-1 text-center ">
          <ProductOverViewHeader
            title={productDescription.name}
          ></ProductOverViewHeader>
          <div className="container pb-2 px-sm-3 pt-3 mt-5 ">
            <div id="carouselExampleCaptions" className="carousel slide">
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                {Object.entries(productDescription.images).map(
                  ([keys, current], index) => {
                    return (
                      <div
                        className={`carousel-item ${
                          index == 0 ? "active" : ""
                        }`}
                        key={index}
                      >
                        <img
                          src={current}
                          className="d-block w-100 "
                          alt="..."
                          height={"400px"}
                        />
                      </div>
                    );
                  }
                )}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="container">
            <div className="card py-md-3 my-4 mx-md-5 px-2 px-md-5">
              <h3>Package OverView</h3>
              {productDescription.overview}
            </div>

            <div className="card py-3 my-4 mx-md-5">
              <h3 className="border-bottom pb-2">Package Services</h3>
              <div className="row row-cols-1 row-cols-md-2 ">
                <div className="col border-end">
                  <h4>{productDescription.hotels.name}</h4>
                  <div>
                    <p>{productDescription.hotels.description}</p>
                    <ul>
                      {productDescription.hotels.services.map((current) => (
                        <li key={Math.random()}>{current}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col border-start">
                  <h4>Package Details</h4>
                  <h6>
                    <FaClock />{" "}
                    {productDescription.product.packageInclude.Duration}
                  </h6>
                  <h6>
                    <IoMdLocate />{" "}
                    {productDescription.product.packageInclude.places}
                  </h6>
                  <div className="col ">
                    <p className="ps-2 my-0 fw-bold border-top">
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
              </div>
            </div>
          </div>
          <BuyBtn
            productId={productDescription.productId}
            price={productDescription.product.price}
          ></BuyBtn>
        </div>
      ) : (
        <div
          className="container d-flex justify-content-center align-items-center "
          style={{ width: "100vw", height: "100vh" }}
        >
          <ThreeCircles
            visible={true}
            height="100"
            width="100"
            color="#4fa94d"
            ariaLabel="three-circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
          <h1>loading....</h1>
        </div>
      )}
    </>
  );
};
export default ProductOverView;
