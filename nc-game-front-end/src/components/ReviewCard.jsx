import { Link } from "react-router-dom";

const ReviewCard = ({ review }) => {
  return (
    <div className="ReviewCard">
      <h2 className="ReviewCardTitle">{review.title} </h2>
      <p className="ReviewCardAuthor">{review.author}</p>
      <Link to={`/reviews/${review.review_id}`}>
        <img
          className="ReviewCardThumbnails"
          altText={`A picture of ${review.designer} game`}
          src={review.review_img_url}
        />
      </Link>
    </div>
  );
};

export default ReviewCard;
