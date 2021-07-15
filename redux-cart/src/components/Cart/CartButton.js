import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui";

import classes from "./CartButton.module.css";

const CartButton = props => {
  const dispatch = useDispatch();
  const toggleCartHandler = () => {
    dispatch(uiActions.toggleCartVisibility());
  };
  const totalQuantity = useSelector(state => state.cart.items).reduce(
    (totalQuantity, quantity) => (totalQuantity += quantity),
    0
  );
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
