const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + 1 };
    case "decrement":
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const state = store.getState();
  console.log(state);
};

store.subscribe(counterSubscriber);
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
