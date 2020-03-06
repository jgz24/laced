import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/App";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import { applyMiddleware, compose, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(ReduxThunk))
);

export const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
