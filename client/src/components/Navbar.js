import React from "react";
import { Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import Settings from "./Settings";

function Navbar() {
  return (
    <>
      <div class="ui compact menu">
        <a class="item">
          <Link to="/savedCards">My Account</Link>
        </a>
        <a class="item">{Settings}</a>
      </div>
    </>
  );
}

export default Navbar;
