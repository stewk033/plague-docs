import React from "react";
<<<<<<< HEAD
import { Form, Card } from "semantic-ui-react";
import Submit from "../components/Submit";

function VaxCardForm() {
  return (
    <div className="primary" style={{ height: "100vh", width: "100%" }}>
      <Card className="inside">
        <Form className="form">
          <Form.Field>
            <label className="label">Vaccine Type</label>
            <input className="input" placeholder="Vaccine Type" />
          </Form.Field>
          <Form.Field>
            <label className="label">Vaccine Date</label>
            <input className="input" placeholder="Vaccine Date" />
          </Form.Field>
          <Form.Field>
            <label className="label">Additional Information</label>
            <input className="input" />
          </Form.Field>
          <Submit>Save and Create Virtual Card</Submit>
        </Form>
      </Card>
=======
import { Form, Card} from "semantic-ui-react";
import Submit from "../components/Submit";

// const options = [
//   { key: "y", text: "yes", value: "yes" },
//   { key: "n", text: "no", value: "no" },
// ];

function VaxCardForm() {
  return (
    <div className="primary" style={{ height: "100vh", width: "100%" }}>
    <Card className="inside">
    <Form className="form">
      <Form.Field>
        <label className="label">Vaccine Type</label>
        <input className="input" placeholder="Vaccine Type" />
      </Form.Field>
      <Form.Field>
        <label className="label">Vaccine Date</label>
        <input className="input" placeholder="Vaccine Date" />
      </Form.Field>
      <Form.Field>
        <label className="label">Additional Information</label>
        <input className="input"/>
      </Form.Field>
      <Submit>Save and Create Virtual Card</Submit>
    </Form>
    </Card>
>>>>>>> 747b6eca433259e81e8a863ab9b26fa2781b3a19
    </div>
  );
}

<<<<<<< HEAD
export default VaxCardForm;
=======
export default VaxCardForm;
>>>>>>> 747b6eca433259e81e8a863ab9b26fa2781b3a19
