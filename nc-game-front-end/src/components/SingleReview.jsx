import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchSingleReview } from "../api";
import { useParams } from "react-router-dom";
import CommentsByReview from "./CommentsByReview";
import { format } from "date-fns";
import { patchVotes } from "../api";

const SingleReview = () => {
  const { review_id } = useParams();

  const [singleReview, setSingleReview] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [votes, setVotes] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);
 
  useEffect(() => {
    setIsLoading(true);
    fetchSingleReview(review_id).then((response) => {
      setSingleReview(response.review);
      setVotes(response.review.votes);
      setIsLoading(false);
    });
  }, []);

  const downVote = (review_id) => {
    setVotes(votes - 1);
    setHasVoted(true);
    patchVotes(review_id, -1).catch((err) => {
      console.log(err);
      setVotes((currVotes) => currVotes + 1);
      setHasVoted(false);
    });
  };

  const upVote = (review_id) => {
    setVotes(votes + 1);
    setHasVoted(true);
    patchVotes(review_id, 1).catch((err) => {
      console.log(err);
      setVotes((currVotes) => currVotes - 1);
      setHasVoted(false);
    });
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading Review...</p>
      ) : (
        <div>
          <h2 className="SingleReviewPageTitle">{singleReview.title} </h2>
          <h4 className="CreatedAt">
            {format(new Date(singleReview.created_at), "dd/MM/yyyy")}
          </h4>

          <h3 className="SingleReviewAuthor">{singleReview.author}</h3>

          <img
            className="SingleReviewImg"
            alt={`A picture of ${singleReview.designer} game`}
            src={singleReview.review_img_url}
          />

          <button
            disabled={hasVoted}
            onClick={() => upVote(singleReview.review_id)}
          >
            {votes}
            <span arial-label="votes for this comment"> 👍 </span>
          </button>
          <button
            disabled={hasVoted}
            onClick={() => downVote(singleReview.review_id)}
          >
            {votes}
            <span arial-label="votes for this comment"> 👎 </span>
          </button>
          <CommentsByReview review_id={review_id} />
        </div>
      )}
    </div>
  );
};

export default SingleReview;
