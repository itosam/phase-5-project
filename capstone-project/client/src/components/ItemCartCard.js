import React from "react";
import { Card, Button } from "react-bootstrap";

const ItemCartCard = ({ item, id, onDeleteItem }) => {
  function handleClick() {
    fetch(`cart_items/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        onDeleteItem(id);
      }
    });
  }
  return (
    <div style={{ padding: "0.5rem" }}>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={item.image}
          width={250}
          height={250}
        />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>${item.price}</Card.Text>
          <Card.Body
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <Button variant="secondary" onClick={handleClick}>
              Remove from Cart
            </Button>
          </Card.Body>
        </Card.Body>
      </Card>
    </div>
  );
}


export default ItemCartCard