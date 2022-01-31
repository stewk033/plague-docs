import React from "react";
import { Button } from "semantic-ui-react";
import "./style.css";

function Submit(props) {
  return (
    //button with loading feature when clicked
    <Button className="submit" type="submit" basic loading {...props} />
  );
}

export default Submit;
