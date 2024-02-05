import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CartBadge = () => {
  const navigate = useNavigate();
  const stateItem = useSelector((state) => state.cart.cartItem.length);
  return (
    <button
      type="button"
      className="btn btn-outline-light position-relative mx-md-3 mx-4 "
      onClick={() => navigate("/cart")}
    >
      <FaCartShopping />
      <span className="position-absolute top-0 start-100 translate-middle ">
        <span className="bg-danger rounded-circle px-1">{stateItem}</span>
      </span>
    </button>
  );
};
export default CartBadge;
