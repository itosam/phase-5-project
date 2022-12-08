import React from "react";
import { Card, Button } from "react-bootstrap";
import Rating from "@mui/material/Rating";
import {Stack} from "react-bootstrap";
import { useState, useContext } from "react";
import { UserContext } from "./context/Users";
import { ReviewsContext } from "./context/Reviews";

const ItemReviewCard = ({ review}) => {
  const { user } = useContext(UserContext);
  const { handleDeleteReview } = useContext(ReviewsContext);

  const date = Date(review.created_at);
  function handleDelete() {
    fetch(`/reviews/${review.id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        handleDeleteReview(review.id);
      }
    });
  }

  return (
    <div style={{ padding: "1rem", width: "90%" }}>
      <Card>
        <Card.Header as="h5">
          Reviewed by: {review.user.username} --------on: {date.slice(0, 16)}
        </Card.Header>
        <Card.Body>
            <>
              <Stack spacing={1}>
                <Rating name="read-only" readOnly value={review.rating} />
              </Stack>
              <Card.Text>{review.comment}</Card.Text>
            </>
          {!user || user.username !== review.user.username ? (
            ""
          ) : (
            <div>
              <Button
                varient="secondary"
                onClick={handleDelete}
              >
                Delete Review
              </Button>
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default ItemReviewCard