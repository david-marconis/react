import Menu from "./components/Menu/Menu";
import Greeting from "./components/Menu/Greeting";
import Header from "./components/Header/Header";
import { useContext, useEffect, useState } from "react";
import CartContext from "./components/Cart/CartContext";
import Cart from "./components/Cart/Cart";

import classes from "./App.module.css";

const App = () => {
  const cartContext = useContext(CartContext);
  const [menuItems, setMenuItems] = useState([]);
  const [menuError, setMenuError] = useState();
  const [isLoadig, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchMenu = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://react-http-f53c2-default-rtdb.europe-west1.firebasedatabase.app/menu.json"
      );
      if (!response.ok) {
        throw new Error("Kunne ikke laste inn menyen.");
      }
      const data = await response.json();
      const menuItems = [];
      for (const key in data) {
        menuItems.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price
        });
      }
      setMenuItems(menuItems);
      setIsLoading(false);
    };

    fetchMenu().catch(error => {
      setIsLoading(false);
      setMenuError(error.message);
    });
  }, []);
  let menu = <Menu menuItems={menuItems}></Menu>;
  if (isLoadig) {
    menu = <p className={classes["status-text"]}>Laster inn menyen ...</p>;
  }
  if (menuError) {
    menu = <p className={classes["error-text"]}>{menuError}</p>;
  }

  return (
    <>
      {cartContext.isCartVisible && <Cart menuItems={menuItems} />}
      <Header />
      <Greeting />
      {menu}
    </>
  );
};

export default App;
