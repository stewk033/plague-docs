import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import Submit from "./components/Submit";
// import Login from "./pages/LogIn";
// import SavedCards from "./pages/SavedCards";
// import SignupCards from "./pages/SignupCards";
// import VaxCardForms from "./pages/VaxCardForms";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
