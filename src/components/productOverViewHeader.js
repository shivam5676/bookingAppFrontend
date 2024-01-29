import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io"
import BuyBtn from "./BuyBtn";
import productHeadercss from "./productOverViewHeader.module.css"
const ProductOverViewHeader=()=>{
    const navigate=useNavigate()
    return(
        <div className={`d-flex justify-content-between fixed-top  text-white py-3 ${productHeadercss.wrapper}`}>
        <div className="ps-3 ps-sm-5" onClick={()=>{navigate(-1)}} ><IoMdArrowRoundBack style={{height:"30px",width:"30px"}}/></div>
        <div className="">package title</div>
        <div className=""></div>
      </div>
    )
}
export default ProductOverViewHeader;