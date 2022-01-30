import React from "react";
import "./App.css";
import Submit from "./components/Submit";
import Login from "./pages/LogIn";
import SavedCards from "./pages/SavedCards";
import SignupCards from "./pages/SignupCards";
import VaxCardForms from "./pages/VaxCardForms";

function App() {
  return (
    (
      <div>
        <Submit />
      </div>
    ),
    (
      <div>
        <Login />
      </div>
    ),
    (
      <div>
        <SavedCards />
      </div>
    ),
    (
      <div>
        <SignupCards />
      </div>
    ),
    (
      <div>
        <VaxCardForms />
      </div>
    )
  );
}

export default App;
