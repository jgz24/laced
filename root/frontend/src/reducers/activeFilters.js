const activeFiltersReducer = (state = {}, action) => {
  let tempState = { ...state };
  let { category, filterOption } = action;
  switch (action.type) {
    case "addActiveFilter":
      tempState[category] = filterOption;

      return tempState;

    case "deleteActiveFilter":
      if (tempState[category]) {
        delete tempState[category];
      }

      return tempState;

    case "resetAllFilters":
      tempState = {};

      return tempState;

    default:
      return state;
  }
};

export default activeFiltersReducer;
