import axios from "axios";

import React, { useState } from "react";
import signupcss from "./signup.module.css";
import { FaEnvelope } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { RiLockPasswordLine } from "react-icons/ri";
import { ImUserTie } from "react-icons/im";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

const SignUp = () => {
  const domain=process.env.REACT_APP_BACKENDURL
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loginLoader, setLoginLoader] = useState(false);

  const navigate = useNavigate();

  const nameHandler = (event) => {
    setName(event.target.value);
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const confirmPasswordHandler = (event) => {
    setConfirmPassword(event.target.value);
    if (
      event.target.value !== password &&
      event.target.value.length >= password.length
    ) {
    }
  };

  const submitDataHandler = async (event) => {
    setLoginLoader(true);
    event.preventDefault();
    const myobj = {
      name: name,
      password: password,
      confirmPassword: confirmPassword,
      email: email,
    };
    try {
      const res = await axios.post(`${domain}/signup`, myobj);

      toast.success(res.data.message);
      setLoginLoader(false);
      navigate("/");
    } catch (err) {
      setLoginLoader(false);
      if (err.response) {
        toast.error(err.response.data.message);
      } else {
        toast.error("something went wrong.....try after sometime ");
      }
    }
  };

  return (
    <div className={signupcss.signupMain}>
      <div className={signupcss.container}>
        <div className="row ">
          {" "}
          {/* <p className="col  ms-2 mt-2">hey user join us now </p> */}
          <h3 className="col text-center pt-3 fw-bolder text-warning fw-bold">
            Registration form
          </h3>
        </div>
        <hr></hr>

        <form className={signupcss.form}>
          <div className={signupcss.inputTab}>
            <p>Full Name</p>
            <div>
              <ImUserTie className={signupcss.icon}></ImUserTie>{" "}
              <input
                placeholder="enter your Full Name "
                onChange={nameHandler}
              ></input>
            </div>
          </div>

          <div className={signupcss.inputTab}>
            <p>Email id</p>
            <div>
              <FaEnvelope className={signupcss.icon}></FaEnvelope>
              <input
                placeholder="enter your email id "
                onChange={emailHandler}
              ></input>
            </div>
          </div>
          <div className={signupcss.inputTab}>
            <p>Password</p>
            <div>
              <RiLockPasswordFill
                className={signupcss.icon}
              ></RiLockPasswordFill>
              <input
                placeholder="enter your password "
                onChange={passwordHandler}
              ></input>
            </div>
          </div>
          <div className={signupcss.inputTab}>
            <p>Confirm Password</p>
            <div>
              <RiLockPasswordLine
                className={signupcss.icon}
              ></RiLockPasswordLine>
              <input
                placeholder="Re-type your password "
                onChange={confirmPasswordHandler}
              ></input>
            </div>
          </div>
        </form>
        <div className={signupcss.signupbtn}>
          <button onClick={submitDataHandler}>
            {loginLoader ? (
              <ThreeDots
                height="40"
                width="80"
                radius="9"
                color="aliceblue"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              />
            ) : (
              "SIGN UP"
            )}
          </button>
        </div>
        <div className={signupcss.loginbtn}>
          <p>Already have an account</p>
          <a href="/login">
            <button>Login now</button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
