import React from "react";
import { Form } from "semantic-ui-react";

const options = [
  { key: "y", text: "yes", value: "yes" },
  { key: "n", text: "no", value: "no" },
];

function VaxCardForm() {
  return (
    <Form>
      <Form.Field>
        <label>Vaccine Type</label>
        <input placeholder="Vaccine Type" />
      </Form.Field>
      <Form.Field>
        <label>Vaccine Date</label>
        <input placeholder="Vaccine Date" />
      </Form.Field>
      <Form.Field>
        <label>Additional Information</label>
        <input />
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default VaxCardForm;
