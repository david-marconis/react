import { useContext, useEffect, useState } from "react";
import CartContext from "../Cart/CartContext";
import classes from "./CartButton.module.css";
import CartIcon from "./CartIcon";

const CartButton = props => {
  const cartContext = useContext(CartContext);
  const { items } = cartContext;
  const totalCount = Object.keys(items).reduce(
    (total, id) => total + items[id],
    0
  );
  const [isButtonAnimated, setIsButtonAnimated] = useState(false);
  useEffect(() => {
    if (Object.keys(items).length === 0) {
      return;
    }
    setIsButtonAnimated(true);
    const timer = setTimeout(() => {
      setIsButtonAnimated(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [items]);
  const buttonClasses = `${classes.button} ${isButtonAnimated && classes.bump}`;
  const onClickHandler = () => {
    cartContext.onShowCart();
  };
  return (
    <button className={buttonClasses} onClick={onClickHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.badge}>{totalCount}</span>
    </button>
  );
};

export default CartButton;
