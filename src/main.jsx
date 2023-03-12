import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "./features/User";
import themeReducer from "./features/theme";

const store = configureStore({
  //reducers in the features
  //which reducer this app is gonna use . we will say it in reducer property
  reducer: {
    user: userReducer,
    theme: themeReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
