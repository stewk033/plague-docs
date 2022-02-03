import React from "react";
import { Card } from "semantic-ui-react";
<<<<<<< HEAD
import "./style.css";
function SavedCards() {
  return (
    <Card.Group className="primary" style={{ height: "100vh", width: "100%" }}>
      <Card>
=======
import './style.css'
function SavedCards() {
  return (
    <Card.Group className="primary" style={{ height: "100vh", width: "100%" }}>
      <Card >
>>>>>>> 747b6eca433259e81e8a863ab9b26fa2781b3a19
        <Card.Content>
          <Card.Header>Mom</Card.Header>
          <Card.Meta>Parent</Card.Meta>
          <Card.Description>
            Mom's vaccination card information here.
          </Card.Description>
        </Card.Content>
      </Card>

      <Card>
        <Card.Content>
          <Card.Header content="Dad" />
          <Card.Meta content="Parent" />
          <Card.Description content="Dad's vaccination card information here." />
        </Card.Content>
      </Card>

      <Card>
        <Card.Content
          header="Son"
          meta="Child"
          description="The son's vaccination card information here."
        />
      </Card>

      <Card
        header="Daughter"
        meta="Child"
        description="The daughter's vaccination card information here."
      />
    </Card.Group>
  );
}

<<<<<<< HEAD
export default SavedCards;
=======
export default SavedCards;
>>>>>>> 747b6eca433259e81e8a863ab9b26fa2781b3a19
