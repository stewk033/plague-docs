import React from "react";
<<<<<<< HEAD
import { Checkbox, Form, Card } from "semantic-ui-react";
=======
import {Checkbox, Form, Card } from "semantic-ui-react";
>>>>>>> 747b6eca433259e81e8a863ab9b26fa2781b3a19
import Submit from "../components/Submit";

function SignUpForm() {
  return (
    <div className="primary" style={{ height: "100vh", width: "100%" }}>
      <Card className="inside">
<<<<<<< HEAD
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
=======
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
>>>>>>> 747b6eca433259e81e8a863ab9b26fa2781b3a19
    </div>
  );
}

<<<<<<< HEAD
export default SignUpForm;
=======
export default SignUpForm;
>>>>>>> 747b6eca433259e81e8a863ab9b26fa2781b3a19
