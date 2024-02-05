

import { useEffect } from "react";
import PrintServices from "./printServices";
import {  useDispatch, useSelector } from "react-redux";
import { dataSliceActions } from "../store/data";
import axios from "axios";

const Services = () => {
  
  const dispatch=useDispatch()
  useEffect(() => {
    axios
      .get("http://localhost:4000/products", {headers: {
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
