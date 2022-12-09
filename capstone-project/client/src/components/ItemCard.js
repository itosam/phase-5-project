
import ItemInfo from "./ItemInfo"
import { NavLink } from "react-router-dom";
import { Alert, Button, Card } from "react-bootstrap";
import { useState, useContext } from "react";
import { UserContext } from "./context/Users";
import { IsLoginContext } from "./context/IsLogin";

const ItemCard = ({ id, name, price, image, brand, description }) => {
   const { user } = useContext(UserContext);
   const { isLogin } = useContext(IsLoginContext);
   const [showAlert, setShowAlert] = useState(false);
   const [addToCart, setAddToCart] = useState(false);

  function handleAddItem() {
    if (isLogin === false) {
      setShowAlert(true);
    } else
      fetch("/cart_items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: user.id,
          item_id: id,
        }),
      })
        .then((r) => r.json())
        .then(setAddToCart(true));
  }
  return (
    <Card
      className="card"
      variant="light"
      style={{
        width: "16rem",
        padding: "1rem",
        margin: "2rem",
        border: " #BEBEBE solid 1px",
        borderRadius: "0",
      }}
    >
      <NavLink to={`/ItemInfo/${id}`} handleAddItem={handleAddItem}>
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
          <p margin>
            <strong>Brand:</strong> {brand}
          </p>
          <p>
            <strong>Price:</strong> ${price}
          </p>
        </div>

        <button class="add_button" onClick={handleAddItem}>
          Add to Cart
        </button>
      </Card.Body>
      {showAlert ? (
        <Alert
          variant="warning"
          style={{
            display: "flex",
            alignItems: "center",
            border: "none",
            borderRadius: "0",
          }}
        >
          Login to Purchase
        </Alert>
      ) : (
        ""
      )}
      {addToCart ? (
        <Alert
          variant="secondary"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            border: "none",
            borderRadius: "0",
            height: "10%",
          }}
        >
          item added
          <Button
            variant="secondary"
            style={{
              backgroundColor:"transparent",
              border: "none",
              color:"black",
              borderRadius: "0",
            }}
            onClick={() => setAddToCart(false)}
          >
            x
          </Button>
        </Alert>
      ) : (
        ""
      )}
    </Card>
  );
};

export default ItemCard;
