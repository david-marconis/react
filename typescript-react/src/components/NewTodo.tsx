import React, { useRef } from "react";
import { useContext } from "react";
import TodosContext from "../store/todos-context";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const todosContext = useContext(TodosContext);
  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const text = inputRef.current!.value;
    if (text.trim().length === 0) {
      return;
    }

    todosContext.addTodo(text);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={inputRef}></input>
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
