import { useContext, useState } from "react";
import classes from "./Cart.module.css";
import CartContext from "./CartContext";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const toCartItem = (item, amount) => (
  <CartItem
    key={item.id}
    id={item.id}
    name={item.name}
    price={item.price}
    amount={amount}
  ></CartItem>
);

const Cart = props => {
  const [isOrdering, setIsOrdering] = useState(false);
  const [orderId, setOrderId] = useState();
  const [isSendingOrder, setIsSendingOrder] = useState(false);
  const [orderError, setOrderError] = useState();
  const [userData, setUserData] = useState();
  const cartContext = useContext(CartContext);
  const { items } = cartContext;

  const findItem = itemId => {
    return props.menuItems.find(i => i.id === itemId);
  };

  const accumulator = items => {
    return (total, id) => total + findItem(id).price * items[id];
  };

  const totalAmount = Object.keys(items)
    .reduce(accumulator(items), 0)
    .toFixed(2);

  const startOrderingHandler = () => {
    setIsOrdering(true);
  };

  const cancelOrderHandler = () => {
    setIsOrdering(false);
  };

  const confirmOrderHandler = userData => {
    setIsOrdering(false);
    setUserData(userData);
    sendOrder(userData).catch(error => {
      setOrderError(error.message);
      setIsSendingOrder(false);
    });
  };

  const closeCartHandler = () => {
    setIsOrdering(false);
    cartContext.onCloseCart();
  };

  const sendOrder = async userData => {
    setIsSendingOrder(true);
    setOrderError();
    const response = await fetch(
      "https://react-http-f53c2-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: userData, cart: cartContext.items })
      }
    );
    if (!response.ok) {
      throw new Error("Kunne ikke sende ordre!");
    }
    const data = await response.json();

    setOrderId(data.name);
    setIsSendingOrder(false);
    cartContext.onClearCart();
  };

  const retryOrderHandler = () => {
    confirmOrderHandler(userData);
  };

  const cartContent = (
    <>
      <ul className={classes["cart-items"]}>
        {Object.keys(items).map(id => toCartItem(findItem(id), items[id]))}
      </ul>
      <div className={classes.total}>Total {totalAmount}</div>
      <footer className={classes.actions}>
        {isOrdering && (
          <Checkout
            onCancel={cancelOrderHandler}
            onConfirm={confirmOrderHandler}
          />
        )}
        {!isOrdering && (
          <>
            <button onClick={closeCartHandler}>Lukk</button>
            <button onClick={startOrderingHandler}>Bestill</button>
          </>
        )}
      </footer>
    </>
  );

  const sendingOrderContent = <p>Sender ordre ...</p>;
  const orderSentContent = (
    <>
      <p>Din ordre {orderId} er bestillt!</p>{" "}
      <footer className={classes.actions}>
        <button onClick={closeCartHandler}>Lukk</button>
      </footer>
    </>
  );
  const orderErrorContent = (
    <>
      <p>Det oppstod en feil ved sending av din ordre</p>{" "}
      <footer className={classes.actions}>
        <button onClick={closeCartHandler}>Avbryt</button>
        <button onClick={retryOrderHandler}>Prøv på nytt</button>
      </footer>
    </>
  );

  return (
    <Modal>
      {!isSendingOrder && !orderId && !orderError && cartContent}
      {isSendingOrder && sendingOrderContent}
      {orderError && orderErrorContent}
      {orderId && orderSentContent}
    </Modal>
  );
};

export default Cart;
