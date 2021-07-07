import Menu from "./components/Menu/Menu";
import { DUMMY_MEALS } from "./components/Menu/dummy-meals";
import Greeting from "./components/Menu/Greeting";
import Header from "./components/Header/Header";
import { useContext } from "react";
import CartContext from "./components/Cart/CartContext";
import Cart from "./components/Cart/Cart";

const App = () => {
  const cartContext = useContext(CartContext);
  return (
    <>
      {cartContext.isCartVisible && <Cart />}
      <Header />
      <Greeting />
      <Menu menuItems={DUMMY_MEALS}></Menu>
    </>
  );
};

export default App;
