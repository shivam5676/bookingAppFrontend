import BuyBtncss from "./BuyBtn.module.css"
const BuyBtn=()=>{
    return(
        <div className="container px-5 " >
        <div className={`card mx-md-5 px-md-5 bg-warning`} >
          <div className="row row-cols-1 row-cols-md-2 ">
            <div className={`col ${BuyBtncss.wrapper} mb-2 my-sm-1`} >
              <p > Amount</p>
              <h5>Rs. 30000</h5>
            </div>
            <div className="col d-flex align-items-center justify-content-center pb-1 pb-sm-0">
              <button className={`btn btn-outline-dark fw-bolder ${BuyBtncss.wrapper}`}>Buy this Package</button>
            </div>
          </div>
        </div>
      </div>
    )
}
export default BuyBtn