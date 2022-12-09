import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";

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
      <Card>
        <Row>
        <Col>
        <Card.Img
          src={item.image}
          style={{ width: "15rem", marginLeft:"28%" }}/>
        </Col>
        <Col>
        <Card.Body style={{ marginTop:"20px" }}>
          <Card.Text>{item.name}</Card.Text>
          <Card.Text>Price: ${item.price}</Card.Text>
            <button className="add_button" onClick={handleClick} style={{marginTop:"5%"}}>
              Remove from Cart
            </button>
        </Card.Body>
      </Col>
        </Row>
      </Card>
    </div>
  );
}


export default ItemCartCard