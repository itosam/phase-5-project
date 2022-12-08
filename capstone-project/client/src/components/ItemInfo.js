
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Alert, Button, Card } from "react-bootstrap";
import { UserContext } from "./context/Users";
import { IsLoginContext } from "./context/IsLogin";
import Review from "./Review"

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
          width: "50%",
          padding: "1rem",
          marginLeft: "10%",
          marginTop: "2%",
          marginBottom: "2%",
        }}
      >
        <Card.Body style={{ textAlign: "left" }}>
          <img
            src={itemInfo.image}
            alt={itemInfo.title}
            style={{ position: "relative", width: "20rem" }}
          />
          <strong>{itemInfo.name}</strong>
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
          <Button
            variant="outline-dark"
            size="sm"
            style={{ border: "solid 2px" }}
            onClick={handleAddItem}
          >
            Add to Cart
          </Button>
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
            }}
          >
            item added
            <Button variant="secondary" onClick={() => setAddToCart(false)}>
              x
            </Button>
          </Alert>
        ) : (
          ""
        )}
      </Card>
      <Review/>
    </div>
  );
};
// };

export default ItemInfo;
