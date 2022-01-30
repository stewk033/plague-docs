import React from "react";
import { Card } from "semantic-ui-react";

function SavedCards() {
  return (
    <Card.Group>
      <Card>
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

export default SavedCards;
