import { useContext, useRef } from "react";
import CartContext from "../Cart/CartContext";

import Input from "../UI/Input";

import classes from "./MenuItemControl.module.css";

const MenuItemControl = props => {
  const inputRef = useRef();
  const cartContext = useContext(CartContext);
  const addToCartHandler = event => {
    event.preventDefault();
    const amount = inputRef.current.getValue();
    console.log(`Adding ${amount} of ${props.id}`);
    cartContext.onAddItem(props.id, amount);
  };
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        ref={inputRef}
        input={{
          id: `amount_${props.id}`,
          type: "number",
          defaultValue: "1",
          min: "1",
          max: "100",
          step: "1",
        }}
      />
      <button type="submit" onClick={addToCartHandler}>
        + Add
      </button>
    </form>
  );
};

export default MenuItemControl;
