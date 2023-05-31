import { fetchCommentsById } from "../api";
import CommentCard from "./CommentCard";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const CommentsByReview = ({ review_id }) => {
  const [comments, setComments] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    fetchCommentsById(review_id).then((response) => {
      setComments(response);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p className="Loading">Loading Comments......</p>;
  }

  return (
    <div className="CommentGroup">
      {comments.length === 0 ? (
        <p> no comments avaliable</p>
      ) : (
        comments.map((comment) => {
          return <CommentCard comment={comment} />;
        })
      )}
      
    </div>
  );
};

export default CommentsByReview;
