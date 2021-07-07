import CartButton from "./CartButton";
import classes from "./Header.module.css";

import image from "../../assets/meals.jpg";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>Strandvegen Sushi</h1>
        <CartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={image} alt="Meals"></img>
      </div>
    </>
  );
};

export default Header;
