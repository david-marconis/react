import { useContext, useState } from "react";
import classes from "./Cart.module.css";
import CartContext from "./CartContext";
import { DUMMY_MEALS } from "../Menu/dummy-meals";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

const findItem = itemId => {
  return DUMMY_MEALS.find(i => i.id === itemId);
};

const toCartItem = (item, amount) => (
  <CartItem
    key={item.id}
    id={item.id}
    name={item.name}
    price={item.price}
    amount={amount}
  ></CartItem>
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
    cartContext.onClearCart();
    setIsOrdered(true);
  };
  const [isOrdered, setIsOrdered] = useState(false);
  const orderOkHandler = () => {
    setIsOrdered(false);
    cartContext.onCloseCart();
  };

  return (
    <Modal>
      {isOrdered && (
        <>
          <h2>Din ordre #{(Math.random() * 10000) | 0} er bestillt!</h2>
          <div className={classes.actions}>
            <button className={classes.actions} onClick={orderOkHandler}>
              OK!
            </button>
          </div>
        </>
      )}
      {!isOrdered && (
        <>
          <ul className={classes["cart-items"]}>
            {Object.keys(items).map(id => toCartItem(findItem(id), items[id]))}
          </ul>
          <div className={classes.total}>Total {totalAmount}</div>
          <footer className={classes.actions}>
            <button onClick={() => cartContext.onCloseCart()}>Lukk</button>
            <button onClick={orderHandler}>Bestill</button>
          </footer>
        </>
      )}
    </Modal>
  );
};

export default Cart;
