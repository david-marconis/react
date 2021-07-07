import classes from "./MenuItem.module.css";
import MenuItemControl from "./MenuItemControl";

const MenuItem = props => {
  return (
    <div className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <label className={classes.description}>{props.description}</label>
        <br />
        <label className={classes.price}>${props.price}</label>
      </div>
      <MenuItemControl id={props.id}></MenuItemControl>
    </div>
  );
};

export default MenuItem;
