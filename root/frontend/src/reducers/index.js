import cartItemsReducer from "./cartItems";
import activeFiltersReducer from "./activeFilters";
import checkedFiltersReducer from "./checkedFilters";
import setProductsReducer from "./products";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cartItems", "activeFilters", "checkedFilters"]
};

const rootReducer = combineReducers({
  cartItems: cartItemsReducer,
  activeFilters: activeFiltersReducer,
  checkedFilters: checkedFiltersReducer,
  setProducts: setProductsReducer
});

export default persistReducer(persistConfig, rootReducer);
