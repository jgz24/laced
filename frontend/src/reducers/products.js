const setProductsReducer = (state = [], action) => {
  let { products } = action;
  let tempState;
  if (products !== undefined) {
    tempState = [...products];
  } else {
    tempState = [];
  }
  switch (action.type) {
    case "setProducts":
      return tempState;
    default:
      return state;
  }
};

export default setProductsReducer;
