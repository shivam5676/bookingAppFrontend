import offercss from "./Offers.module.css";import herobg from "./images/herobg.jpg";
const Offers = () => {
  return (
    <div className="container-fluid mx-0">
        <h3 className="text-center fw-bold">Exclusive Offers</h3>
      <div className={` ${offercss.offersContainer} py-2`}>
        <div className={`${offercss.offersCard}`}>
         <img src={herobg} className={offercss.offersImg} draggable="false"></img>
        </div>
        <div className={`${offercss.offersCard}`}>
         <img src={herobg} className={offercss.offersImg} draggable="false"></img>
        </div>
        <div className={`${offercss.offersCard}`}>
         <img src={herobg} className={offercss.offersImg} draggable="false"></img>
        </div> <div className={`${offercss.offersCard}`}>
         <img src={herobg} className={offercss.offersImg} draggable="false"></img>
        </div>
      </div>
    </div>
  );
};
export default Offers;
