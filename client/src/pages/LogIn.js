import React from "react";
import 'semantic-ui-css/semantic.min.css'

function Login() {
  return (
    <div class="ui card">
      <div class="content">
        <form class="ui form">
  <div class="field">
    <label>Email Address</label>
    <input type="text" name="email-address" placeholder="Email Address"/>
  </div>
  <div class="field">
    <label>Password</label>
    <input type="text" name="password" placeholder="password"/>
  </div>
  <div class="field">
    <div class="ui checkbox">
      <input type="checkbox" tabindex="0" class="hidden"/>
      <label>I agree to the Terms and Conditions</label>
    </div>
  </div>
  <button class="ui button" type="submit">Submit</button>
</form>
      </div>
      <div class="extra content">
        <button class="ui button">Log In</button>
      </div>
    </div>
  );
}

export default Login;
