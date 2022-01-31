import React from "react";
import Login from "./pages/LogIn";
import SavedCards from "./pages/SavedCards";
import SignUpForm from "./pages/SignUpForm";
import VaxCardForm from "./pages/VaxCardForm";

function App() {
  return (
    <div>
      <main>
        <Login></Login>
        <VaxCardForm></VaxCardForm>
        <SignUpForm></SignUpForm>
        <SavedCards></SavedCards>
      </main>
    </div>
  );
}

export default App;
