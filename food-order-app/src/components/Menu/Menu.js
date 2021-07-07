import MenuItem from "./MenuItem";
import Card from "../UI/Card";

import classes from "./Menu.module.css";

const Menu = props => {
  return (
    <Card className={classes.meals}>
      <ul>
        {props.menuItems.map(item => (
          <li key={item.id}>
            <MenuItem
              id={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
            ></MenuItem>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Menu;
