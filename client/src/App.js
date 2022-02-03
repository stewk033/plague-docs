import React from "react";
import Login from "./pages/Login";
import SavedCards from "./pages/SavedCards";
<<<<<<< HEAD
import SignUpForm from "./pages/SignUpForm";
=======
import SignUpForm from "./pages/SignupForm";
>>>>>>> 747b6eca433259e81e8a863ab9b26fa2781b3a19
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
