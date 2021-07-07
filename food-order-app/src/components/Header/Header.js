import CartButton from "./CartButton";
import classes from "./Header.module.css";

import image from "../../assets/isajl4p7dcqbvrvc8rtu.webp";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h2>Strandvegen Sushi</h2>
        <CartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={image} alt="Meals"></img>
      </div>
    </>
  );
};

export default Header;
