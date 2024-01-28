import herobg from "./images/herobg.jpg";
import herocss from "./hero.module.css";
const Hero = () => {
  return (
    <div className={` px-4 py-5 mb-2 text-center  ${herocss.herobg}`}>
      <img className="d-block mx-auto mb-4" alt="" />
      <h2 className="display-5 fw-bold  p-2 text-white">Your Gateway to Incredible India Experiences</h2>
      <div className="col-lg-6 mx-auto ">
 
        <div className="row row-cols-1">
          <div className={`col`}>
            <input
              type="text"
              class="form-control rounded-pill"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="col mt-3">
            <button
              type="button"
              class="btn btn-outline-secondary  px-4"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
