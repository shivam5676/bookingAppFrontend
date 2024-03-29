import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io"

import productHeadercss from "./productOverViewHeader.module.css"
import CartBadge from "./cartBadge";
const ProductOverViewHeader=(props)=>{
    const navigate=useNavigate()
    return(
        <div className={`d-flex justify-content-between fixed-top  text-white py-3 ${productHeadercss.wrapper}`}>
        <div className="ps-3 ps-sm-5" onClick={()=>{navigate(-1)}} ><IoMdArrowRoundBack style={{height:"30px",width:"30px"}}/></div>
        <div ><h5 className="fw-bolder">{props.title}</h5></div>
        <div className=""><CartBadge></CartBadge></div>
      </div>
    )
}
export default ProductOverViewHeader;