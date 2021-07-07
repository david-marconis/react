import { useContext } from "react";
import classes from "./Cart.module.css";
import CartContext from "./CartContext";
import { DUMMY_MEALS } from "../Menu/dummy-meals";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

const findItem = itemId => {
  return DUMMY_MEALS.find(i => i.id === itemId);
};

const toCartItem = (item, amount) => (
  <li key={item.id}>
    <CartItem
      id={item.id}
      name={item.name}
      price={item.price}
      amount={amount}
    ></CartItem>
  </li>
);

const accumulator = items => {
  return (total, id) => total + findItem(id).price * items[id];
};

const Cart = () => {
  const cartContext = useContext(CartContext);
  const { items } = cartContext;
  const totalAmount = Object.keys(items)
    .reduce(accumulator(items), 0)
    .toFixed(2);
  const orderHandler = () => {
    console.log("Ordering items: ", items);
  };

  return (
    <Modal>
      <ul className={classes["cart-items"]}>
        {Object.keys(items).map(id => toCartItem(findItem(id), items[id]))}
      </ul>
      <div className={classes.total}>Total amount {totalAmount}</div>
      <footer className={classes.actions}>
        <button onClick={() => cartContext.onCloseCart()}>Close</button>
        <button onClick={orderHandler}>Order</button>
      </footer>
    </Modal>
  );
};

export default Cart;
