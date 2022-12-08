import React, { useState } from "react";

const ReviewsContext = React.createContext();
function ReviewsProvider({ children }) {
  const [reviews, setReviews] = useState([]);
  const handleDeleteReview = (id) => {
    const updatedReviews = reviews.filter((review) => {
      return review.id !== id;
    });
    setReviews(updatedReviews);
  };

  return (
    <ReviewsContext.Provider
      value={{ reviews, setReviews, handleDeleteReview }}
    >
      {children}
    </ReviewsContext.Provider>
  );
}

export { ReviewsContext, ReviewsProvider };
