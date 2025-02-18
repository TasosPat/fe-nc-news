import { StyledCommentCard } from "./styles";

function CommentCard({ comment }) {
  return (
    <StyledCommentCard>
    <p>{comment.created_at}</p>
      <p>{comment.body}</p>
      <p>{comment.author}</p>
      <p>{comment.votes}</p>
    </StyledCommentCard>
  );
}

export default CommentCard;