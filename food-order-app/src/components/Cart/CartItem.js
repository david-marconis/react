import { useContext } from "react";
import CartContext from "./CartContext";
import classes from "./CartItem.module.css";

const CartItem = props => {
  const cartContext = useContext(CartContext);
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <label className={classes.price}>{props.price.toFixed(2)},-</label>
          <label className={classes.amount}>x{props.amount}</label>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={() => cartContext.onRemoveItem(props.id)}>-</button>
        <button onClick={() => cartContext.onAddItem(props.id, 1)}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
