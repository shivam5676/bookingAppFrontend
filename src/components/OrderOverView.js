import BuyBtn from "./BuyBtn";
import herobg from "./images/herobg.jpg";
import ProductOverViewHeader from "./productOverViewHeader";
const ProductOverView = () => {
  return (
    <div className="container-fluid py-1 text-center ">
      <ProductOverViewHeader></ProductOverViewHeader>
      <div className="container pb-2 px-sm-3 pt-3 mt-5 ">
        <div id="carouselExampleCaptions" class="carousel slide">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
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
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src={herobg}
                class="d-block w-100 "
                alt="..."
                height={"400px"}
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src={herobg}
                class="d-block w-100 "
                alt="..."
                height={"400px"}
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src={herobg}
                class="d-block w-100 "
                alt="..."
                height={"400px"}
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container">
        <div className="card py-md-3 my-4 mx-md-5 px-2 px-md-5">
          <h3>Package OverView</h3>
          hello my name is honey dihsjhjhas jshajhjh sjkjaksjk jhskjkasdk qlwk
          lqkw lkwsj swqjkeqkjhekjh qkwll qw;qlws hwsjqkejwk hello my name is
          honey dihsjhjhas jshajhjh sjkjaksjk jhskjkasdk qlwk lqkw lkwsj
          swqjkeqkjhekjh qkwll qw;qlws hwsjqkejw
        </div>

        <div className="card py-3 my-4 mx-md-5">
          <h3 className="border-bottom pb-2">Package Services</h3>
          <div className="row row-cols-1 row-cols-md-2 ">
            <div className="col border-end">
              <h4>Hotel Details</h4>
              <div>
                <h6>hotel name</h6>
                <p>hotel description</p>
                <ul>
                  <li>hotel dinning and aother services point by point</li>
                  <li>hotel dinning and aother services point by point</li>
                </ul>
              </div>
            </div>
            <div className="col border-start">
              <h4>Package Details</h4>
              <h6>icon of clock and duration</h6>
              <h6>icon of place and loaction 2N kochin / 1N lakshdeep</h6>
              <p>other offering icon like siteseeing dining and transfer</p>
            </div>
          </div>
        </div>
      </div>
      <BuyBtn></BuyBtn>
    </div>
  );
};
export default ProductOverView;
