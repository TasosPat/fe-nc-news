import { StyledCommentCard } from "./styles";

function CommentCard({ comment }) {
  return (
    <StyledCommentCard>
    <p>{comment.created_at}</p>
      <p>{comment.body}</p>
      <p>{comment.author}</p>
      <p>{comment.votes}</p>
      {comment.author === "grumpy19" ? <button onClick={() => {}}>Delete Comment</button> : null}
    </StyledCommentCard>
  );
}

export default CommentCard;