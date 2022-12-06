
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ItemInfo = () => {
  const [itemInfo, setItemInfo] = useState(null);
  // const [itemReviews, setItemReviews] = useState([]);
  // const [reviewScore, setReviewScore] = useState(0.0);
  // const [reviewUpdate, setReviewUpdate] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    fetch(`/items/${id}`)
      .then((res) => res.json())
      .then((item) => {
        setItemInfo(item);
        console.log()
        // setItemReviews(game.reviews);
      });
  }, []);
  // useEffect(() => {
  //   fetch(`itemReview/${id}`)
  //     .then((r) => r.json())
  //     .then((score) => setReviewScore(score));
  // }, [reviewUpdate]);
  // function changeReview() {
  //   setReviewUpdate(() => !reviewUpdate);
  // }
  // // onAddReview passed down to Reviewform
  // const onAddReview = (newReview) => {
  //   setGameReviews([...gameReviews, newReview]);
  // };

  // function handleDelete(e) {

  //   const filtered = gameReviews.filter(
  //     (review) => {
  //       return review.id !== parseInt(e.target.id)
  //     }
  //   );
  //   fetch(`https://haunted-labyrinth-78551.herokuapp.com/reviews/${e.target.id}`, {
  //     method: "DELETE",
  //   })
  //     .then(setGameReviews(filtered))
  //     .then(changeReview());

  // }
  // const displayReviews = gameReviews.map((review) => {
  //   return (
  //     <div key={uuid()}>
  //       <label style={{ fontWeight: "bold" }}>{review.user.name}</label>
  //       <p style={{ fontWeight: "normal" }}>
  //         <strong>Score:</strong> {review.score}
  //         <br />
  //         {review.comment}
  //         <label
  //           id={review.id}
  //           style={{ marginLeft: "10px" }}
  //           onClick={handleDelete}
  //         >
  //           {" "}
  //           ❌
  //         </label>
  //       </p>
  //     </div>
  //   );
  // });

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
            <strong>Category:</strong> {itemInfo.category}
          </p>
          <p>
            <strong>Price:</strong> ${itemInfo.price}
          </p>
          <Button
            variant="outline-dark"
            size="sm"
            style={{ border: "solid 2px" }}
          >
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
      {/* <GameForm
        gameId={id}
        onAddReview={onAddReview}
        currentUserId={currentUserId}
        changeReview={changeReview}
      /> */}
    </div>
  );
};
// };

export default ItemInfo;
