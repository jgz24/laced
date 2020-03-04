const cartItemsReducer = (state = [], action) => {
  let { payload } = action;
  let tempState = [...state];
  switch (action.type) {
    case "addCartItem":
      tempState.push(payload);

      return tempState;
    case "removeCartItem":
      return tempState.filter(cartItem => cartItem.Id !== payload.Id);

    case "removeAllCartItems":
      return [];

    default:
      return state;
  }
};

export default cartItemsReducer;
