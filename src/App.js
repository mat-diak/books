import React from "react";
import ReactDOM from "react-dom";
import Dashboard from "./components/Dashboard.jsx";
import GlobalStyles from "./Global.styled.js";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Dashboard />
    </>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
