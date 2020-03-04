export const addCartItem = cartItem => {
  return {
    type: "addCartItem",
    payload: cartItem
  };
};

export const deleteCartItem = cartItem => {
  return {
    type: "removeCartItem",
    payload: cartItem
  };
};

export const removeAllCartItems = () => {
  return {
    type: "removeAllCartItems"
  };
};

export const addActiveFilter = (category, filterOption) => {
  return {
    type: "addActiveFilter",
    category: category,
    filterOption: filterOption
  };
};

export const deleteActiveFilter = (category, filterOption) => {
  return {
    type: "deleteActiveFilter",
    category: category,
    filterOption: filterOption
  };
};

export const modifyCheckedFilter = (category, filterOption, isChecked) => {
  return {
    type: "modifyCheckedFilter",
    category: category,
    filterOption: filterOption,
    isChecked: isChecked
  };
};

export const resetAllFilters = () => {
  return {
    type: "resetAllFilters"
  };
};

export const setProducts = products => {
  return {
    type: "setProducts",
    products: products
  };
};

export const searchApiCall = url => {
  let searchTerm = url.slice(28);
  return async dispatch => {
    try {
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const result = await res.json();
      dispatch(setProducts(result));
      if (searchTerm.length > 0) {
        dispatch(resetAllFilters());
      }
    } catch (err) {
      console.log(err);
    }
  };
};
