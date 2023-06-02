import { Link } from "react-router-dom";




const CommentCard = ({ comment }) => {

  
    

  return (
    <div className="CommentCard">
      <Link to={`/comments/${comment.comment_id}`}></Link>
      <h3 className="CommentCardAuthor">{comment.author}</h3>
      <p className="CommentCardBody">{comment.body}</p>
      
      <h4 className="CommentCardVotes">Votes: {comment.votes}</h4>
      <h5 className="CommentCardCreatedAt">{comment.created_at}</h5>
    </div>
  );
};

export default CommentCard;
