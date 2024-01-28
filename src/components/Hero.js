import herobg from "./images/herobg.jpg";
import herocss from "./hero.module.css";
const Hero = () => {
  return (
    <div className={`px-4 py-5 mb-5 text-center ${herocss.herobg}`}>
      <img className="d-block mx-auto mb-4" alt="" />
      <h1 className="display-5 fw-bold text-body-emphasis">Centered hero</h1>
      <div className="col-lg-6 mx-auto">
        {/* <div class="d-grid gap-2 d-sm-flex justify-content-sm-center w-100">
        <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
        
      </div> */}
        <div className="row row-cols-1">
          <div className={`col`}>
            <input
              type="text"
              class="form-control"
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
