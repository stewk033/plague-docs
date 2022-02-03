import React from "react";
import {Checkbox, Form, Card } from "semantic-ui-react";
import Submit from "../components/Submit";

function SignUpForm() {
  return (
    <div className="primary" style={{ height: "100vh", width: "100%" }}>
      <Card className="inside">
    <Form className="form">
      <Form.Field>
        <label className="label">First Name</label>
        <input className="input" placeholder="First Name" />
      </Form.Field>
      <Form.Field>
        <label className="label">Last Name</label>
        <input className="input" placeholder="Last Name" />
      </Form.Field>
      <Form.Field>
        <label className="label">Email Address</label>
        <input className="input" placeholder="email" />
      </Form.Field>
      <Form.Field>
        <Checkbox label="I agree to the Terms and Conditions" />
      </Form.Field>
      <Submit>Add Family Member</Submit>
    </Form>
    </Card>
    </div>
  );
}

export default SignUpForm;
