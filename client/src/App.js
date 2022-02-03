import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/Login";
import SavedCards from "./pages/SavedCards";
import SignUpForm from "./pages/SignupForm";
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
