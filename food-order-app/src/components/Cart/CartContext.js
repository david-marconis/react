import React, { useState } from "react";

const CartContext = React.createContext({
  isCartVisible: false,
  items: {}, // This should probably be a Map instead of an object
  onAddItem: () => {},
  onRemoveItem: () => {},
  onCloseCart: () => {},
  onShowCart: () => {},
  onClearCart: () => {},
});

export const CartContextProvider = props => {
  const [items, editItems] = useState({});
  const [isCartVisible, setIsCartVisible] = useState(false);
  const addItemHandler = (id, amount) => {
    editItems(prevItems => {
      var newItems = { ...prevItems };
      newItems[id] = prevItems[id] ? prevItems[id] + +amount : +amount;
      if (newItems[id] <= 0) {
        delete newItems[id];
      }
      return newItems;
    });
  };
  const removeItemHandler = id => {
    addItemHandler(id, -1);
  };
  return (
    <CartContext.Provider
      value={{
        isCartVisible: isCartVisible,
        items: items,
        onAddItem: addItemHandler,
        onRemoveItem: removeItemHandler,
        onCloseCart: () => setIsCartVisible(false),
        onShowCart: () => setIsCartVisible(true),
        onClearCart: () => editItems({}),
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
