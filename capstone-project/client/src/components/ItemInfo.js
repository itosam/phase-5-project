
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Alert, Button, Card, Row, Col } from "react-bootstrap";
import { UserContext } from "./context/Users";
import { IsLoginContext } from "./context/IsLogin";
import Review from "./Review"
import ItemList from "./ItemList";

const ItemInfo = () => {
  const { user } = useContext(UserContext);
  const { isLogin } = useContext(IsLoginContext);
  const [showAlert, setShowAlert] = useState(false);
  const [addToCart, setAddToCart] = useState(false);
  const [itemInfo, setItemInfo] = useState(null);
 
  const { id } = useParams();
  useEffect(() => {
    fetch(`/items/${id}`)
      .then((res) => res.json())
      .then((item) => {
        setItemInfo(item);
        // setItemReviews(game.reviews);
      });
  }, []);
  
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
        item_id: itemInfo.id,
      }),
    })
      .then((r) => r.json())
      .then(setAddToCart(true));
}
  if (itemInfo == null) {
    return <div></div>;
  }
  return (
    <div>
      <Card
        className="mx-auto"
        style={{
          width: "80%",
          padding: "3rem",
          marginLeft: "10%",
          marginTop: "5%",
          marginBottom: "20%",
        }}
      >
        <Card.Body style={{ textAlign: "left" }}>
          <Row>
            <Col>
              <img
                src={itemInfo.image}
                alt={itemInfo.title}
                style={{ position: "flex", width: "100%" }}
              />
            </Col>
            <Col>
              <h4>
                <stong>{itemInfo.name}</stong>
              </h4>
              <br />
              <p>
                <strong>Description</strong>
                <br />
                {itemInfo.description}
              </p>
              <p>
                <strong>Brand:</strong> {itemInfo.brand}
              </p>
              <p>
                <strong>Price:</strong> ${itemInfo.price}
              </p>
              <button class="add_button" onClick={handleAddItem}>
                Add to Cart
              </button>
            </Col>
          </Row>
        </Card.Body>

        {showAlert ? (
          <Alert
            variant="warning"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
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
              height: "3rem",
              border: "none",
              borderRadius: "0",
            }}
          >
            item added
            <Button
              style={{
                backgroundColor: "transparent",
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
      <Review />
    </div>
  );
};
// };

export default ItemInfo;
