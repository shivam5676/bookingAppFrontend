

import { useEffect } from "react";
import PrintServices from "./printServices";
import {  useDispatch, useSelector } from "react-redux";
import { dataSliceActions } from "../store/data";
import axios from "axios";

const Services = () => {
  const domain=process.env.REACT_APP_BACKENDURL
  const dispatch=useDispatch()
  useEffect(() => {
    axios
      .get(`${domain}/products`, {headers: {
        'Authorization': localStorage.getItem("token"),
      }},)
      .then((result) => {
     
        dispatch(dataSliceActions.addproduct(result.data))
      })
      .catch((err) => console.log(err));
  }, []);
  // const productArray=useSelector((state)=>{return state.products})
  // console.log(productArray)

  return <PrintServices ></PrintServices>;
};
export default Services;
