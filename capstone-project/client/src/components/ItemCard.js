
import ItemInfo from "./ItemInfo"
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ItemCard = ({ id, name, price, image, category, description }) => {
  return (
    <Card
      className="card"
      variant="light"
      style={{ width: "10rem", padding: "1rem", margin: "1rem", border: "2px" }}
    >
      <NavLink to={`/ItemInfo/${id}`}>
        <Card.Img
          variant="top"
          src={image}
          alt={name}
          style={{ width: "8rem", border: "1px", borderColor: "black" }}
        />
      </NavLink>
      <Card.Body style={{ textAlign: "left" }}>
        <Card.Title>
          <strong>{name}</strong>
          <br />
        </Card.Title>
        <div>
          <p>
            <strong>category:</strong> {category}
          </p>
          <p>
            <strong>price:</strong> ${price}
          </p>
        </div>

        <Button
          variant="outline-dark"
          size="sm"
          style={{ border: "solid 2px" }}
        >
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ItemCard;
