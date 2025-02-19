import { StyledCommentList } from "./styles";
import CommentCard from "./CommentCard";

function CommentList({ comments }) {
  return (
    <StyledCommentList>
      {comments.map((comment) => (
        <CommentCard key={comment.comment_id} comment={comment} />
      ))}
    </StyledCommentList>
  );
}

export default CommentList;
