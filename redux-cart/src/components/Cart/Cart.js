import { useSelector } from "react-redux";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = props => {
  const items = useSelector(state => state.cart.items);
  const products = useSelector(state => state.products.products);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((quantity, id) => {
          const total = quantity * products[id].price;
          return <CartItem item={{ ...products[id], quantity, total, id }} />;
        })}
      </ul>
    </Card>
  );
};

export default Cart;
