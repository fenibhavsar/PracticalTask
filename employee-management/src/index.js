import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { makeServer } from "./mock/server";
import App from "./App";
import store from "./store";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
