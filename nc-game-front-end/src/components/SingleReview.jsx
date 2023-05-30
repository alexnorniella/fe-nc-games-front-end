import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchSingleReview} from "../api";
import { useParams } from "react-router-dom";
import CommentsByReview from "./CommentsByReview";


const SingleReview = () => {
  const { review_id } = useParams();

  const [singleReview, setSingleReview] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setIsLoading(true);
    fetchSingleReview(review_id).then((response) => {
        setSingleReview(response.review);
        setIsLoading(false);
      });
    }, [])

  return (
    <div>
      {isLoading ? (
        <p>Loading Review...</p>
      ) : (
        <div>
          <h2 className="SingleReviewPageTitle">{singleReview.title} </h2>
          <h4 className="CreatedAt">{singleReview.created_at}</h4>

          <h3 className="SingleReviewAuthor">{singleReview.author}</h3>
          <img className="SingleReviewImg" 
          src={singleReview.review_img_url} />

          <CommentsByReview review_id = {review_id}/> 
          
        </div>
      )}
    </div>
  );
};

export default SingleReview;