
import React from "react";
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
    </div>
  );
}

export default VaxCardForm;