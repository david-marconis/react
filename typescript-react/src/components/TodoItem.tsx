import classes from "./TodoItem.module.css";

type Props = {
  text: string;
  onClick: () => void;
};

const TodoItem: React.FC<Props> = props => {
  return (
    <li className={classes.item} onClick={props.onClick}>
      {props.text}
    </li>
  );
};

export default TodoItem;
