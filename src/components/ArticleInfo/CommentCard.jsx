import { StyledCommentCard } from "./styles";
import { deleteArticleComment } from "../../utils/api";



function CommentCard({ comment, setComments }) {

  const comment_id = comment.comment_id;
  return (
    <StyledCommentCard>
    <p>{comment.created_at}</p>
      <p>{comment.body}</p>
      <p>{comment.author}</p>
      <p>{comment.votes}</p>
      {comment.author === "grumpy19" ? <button onClick={() => {deleteArticleComment(comment_id)
      .then(() => {
        setComments((currComments) => currComments.filter((comment) => comment.comment_id !== comment_id))
      })
      .catch((err) => {
        alert("Something went wrong")
      })
      }}>Delete Comment</button> : null}
    </StyledCommentCard>
  );
}

export default CommentCard;