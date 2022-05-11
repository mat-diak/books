import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";

import Dashboard from "./components/Dashboard.jsx";
import GlobalStyles from "./Global.styled.js";

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Dashboard />
    </Provider>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
