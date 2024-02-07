import { useNavigate } from "react-router-dom";
import CartBadge from "./cartBadge";
import navcss from "./navbar.module.css";

import { useDispatch, useSelector } from "react-redux";
import { loginSliceActions } from "../store/login";
import { cartSliceActions } from "../store/cart";
const NavBar = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const login=useSelector(state=>state.login.islogin)
  return (
    <nav
      className={`navbar navbar-expand-lg   fixed-top ${navcss.wrapper}`}
      aria-label="Thirteenth navbar example"
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample11"
          aria-controls="navbarsExample11"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse d-lg-flex justify-content-between "
          id="navbarsExample11"
        >
          <a
            className="navbar-brand col-lg-3 me-0 fw-bolder text-center text-white fs-3 mt-1 mt-md-0"
            href="#"
            style={{
              fontSize: "1.5rem",

              fontFamily: "cursive",
            }}
          >
            <p style={{ display: "inline-block", color: "#ffa07a" }}>My</p>India
            <p style={{ display: "inline-block", color: "#ffa07a" }}>Trip</p>
          </a>

          <div className="d-lg-flex col-lg-3 justify-content-lg-end py-2 py-md-0">
            <button
              className="btn btn-outline-light fw-bolder  "
              onClick={() => navigate("/order")}
            >
              orders
            </button>

            <CartBadge></CartBadge>
           {login?<button
              className="btn btn-outline-light fw-bolder "
              onClick={() => {
                localStorage.removeItem("isLogged");
                localStorage.removeItem("token");
                dispatch(loginSliceActions.logout())
                dispatch(cartSliceActions.clearCart())
              }}
            >
              LogOut
            </button>:<button
              className="btn btn-outline-light fw-bolder "
              onClick={() => {
                navigate("/login")
              }}
            >
              Log-In
            </button>}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
