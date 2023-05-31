import { fetchReviews } from "../api";
import ReviewCard from "./ReviewCard";
import { useEffect, useState } from "react";

const AllReviews = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetchReviews().then((getReviews) => {
      setReviews(getReviews);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p className="Loading">Loading Reviews.....</p>;
  }
  return (
      <div className="ReviewListAll">
        {reviews.map((review) => {
          return <ReviewCard key={review.review_id} review={review} />;
        })}
      </div>
    
  );
};

export default AllReviews;
