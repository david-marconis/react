import { cartActions } from "./cart";
import { uiActions } from "./ui";

export const fetchCartData = () => async dispatch => {
  const fetchData = async () => {
    const response = await fetch(
      "https://react-http-f53c2-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
    );
    if (!response.ok) {
      throw new Error("Could not fetch cart data!");
    }
    return await response.json();
  };
  try {
    const cart = await fetchData();
    dispatch(cartActions.setCart(cart || []));
  } catch (error) {
    dispatch(
      uiActions.showNotification({
        status: "error",
        title: "Error!",
        message: error.message
      })
    );
  }
};

export const sendCartData = cart => {
  return async dispatch => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending ...",
        message: "Sending cart data"
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-f53c2-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(cart.items)
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!"
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: error.message
        })
      );
    }
  };
};
