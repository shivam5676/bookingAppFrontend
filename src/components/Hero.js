
import herocss from "./hero.module.css";
const Hero = () => {
  return (
    <div className="pt-5">
      <div
        className={`px-4 py-5 mb-2 text-center mt-2 mt-md-3 mt-lg-4 ${herocss.herobg}`}
      >
        <img className="d-block mx-auto mb-4" alt="" />
        <p
          className="display-5 fw-bold  p-2 text-white"
          style={{ fontFamily: "cursive" }}
        >
          Your Gateway to Incredible India Experiences
        </p>
        <div className="col-lg-6 mx-auto ">
          <div className="row row-cols-1">
            <div className={`col`}>
              <input
                type="text"
                className="form-control rounded-pill"
                placeholder="search your destination....."
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="col mt-3">
              <button type="button" className="btn btn-outline-secondary  px-4">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
