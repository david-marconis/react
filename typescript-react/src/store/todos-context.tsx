import React, { useState } from "react";
import Todo from "../models/todo";

type ProviderProps = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

const TodosContext = React.createContext<ProviderProps>({
  items: [],
  addTodo: () => {},
  removeTodo: () => {}
});

export const TodosContextProvider: React.FC = props => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    setTodos(prev => prev.concat(new Todo(text)));
  };

  const removeTodoHandler = (id: string) => {
    setTodos(prev => prev.filter(t => t.id !== id));
  };
  return (
    <TodosContext.Provider
      value={{
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
      }}
    >
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContext;
