const checkedFiltersReducer = (
  state = {
    Gender: {
      Men: false,
      Women: false
    },
    Activity: {
      Athletic: false,
      Casual: false
    },
    Color: {
      Black: false,
      White: false,
      Red: false,
      Blue: false,
      Purple: false,
      Yellow: false,
      Orange: false
    },
    Brand: {
      Nike: false,
      Adidas: false,
      Vans: false,
      Converse: false
    },
    Sport: {
      Basketball: false,
      Baseball: false,
      Golf: false,
      Football: false,
      Soccer: false
    },
    Size: {
      5: false,
      6: false,
      7: false,
      8: false,
      9: false,
      10: false,
      11: false,
      12: false
    },
    Price: {
      "$1-$50": false,
      "$50-$100": false,
      "$100-$150": false,
      "$150-$200": false,
      "$200+": false
    },
    "Sort By": {
      "Low-High": false,
      "High-Low": false
    }
  },
  action
) => {
  let tempState = { ...state };
  let { category, filterOption, isChecked } = action;
  switch (action.type) {
    case "modifyCheckedFilter":
      let keys = Object.keys(tempState[category]);

      // Set all filters within a filter
      // category to be false.
      for (let i = 0; i < keys.length; i++) {
        tempState[category][keys[i]] = false;
      }

      // Set ONE filter to be true.
      tempState[category][filterOption] = isChecked;

      return tempState;

    case "resetAllFilters":
      tempState = {
        Gender: {
          Men: false,
          Women: false
        },
        Activity: {
          Athletic: false,
          Casual: false
        },
        Color: {
          Black: false,
          White: false,
          Red: false,
          Blue: false,
          Purple: false,
          Yellow: false,
          Orange: false
        },
        Brand: {
          Nike: false,
          Adidas: false,
          Vans: false,
          Converse: false
        },
        Sport: {
          Basketball: false,
          Baseball: false,
          Golf: false,
          Football: false,
          Soccer: false
        },
        Size: {
          5: false,
          6: false,
          7: false,
          8: false,
          9: false,
          10: false,
          11: false,
          12: false
        },
        Price: {
          "$1-$50": false,
          "$50-$100": false,
          "$100-$150": false,
          "$150-$200": false,
          "$200+": false
        },
        "Sort By": {
          "Low-High": false,
          "High-Low": false
        }
      };

      return tempState;

    default:
      return state;
  }
};

export default checkedFiltersReducer;
