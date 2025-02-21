import { StyledCommentList } from "./styles";
import { getCommentsbyArtID, addCommentToArticle } from "../../utils/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";
import {
  LoadingWrapper,
  ErrorMessage,
} from "./styles";

function CommentList() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    getCommentsbyArtID(article_id)
  .then((commentData) => {
  setComments(commentData);
  setIsLoading(false);
})
.catch((err) => {
  setError(err.message || "Failed to load article");
  setIsLoading(false);
})
   }, [article_id]);

   const handleInputChange = (e) => {
    setNewComment(e.target.value);
  }
  const handleSubmit = (e) => {
    if (!newComment.trim()) {
      setError("Comment cannot be empty!");
      return;
    }
    const commentData = {
      username: "grumpy19",
      body: newComment
    };
    addCommentToArticle(commentData, article_id)
    .then((comment) => {
      setComments((prevComments) => [comment, ...prevComments])
    })
    .catch((err) => {
      console.log(err);
      setError("Failed to post comment. Please try again.");
      setComments((prevComments) => prevComments.slice(-1));
    });
    setNewComment("");
    document.getElementById("new-comment").value = "";
  };

   if (isLoading) {
    return (
      <LoadingWrapper>
        <p>Loading article details...</p>
      </LoadingWrapper>
    );
  }

  return (
    <StyledCommentList>
      {comments.map((comment) => (
        <CommentCard key={comment.comment_id} comment={comment} setComments={setComments} />
      ))}
      <label htmlFor="new-comment">Add Comment:</label>
  <input type="text" onChange={handleInputChange} id="new-comment" name="new-comment"/>
  <button onClick={handleSubmit}>Post Comment</button>
  {error ? <ErrorMessage>{error}</ErrorMessage> : null}
    </StyledCommentList>
  );
}

export default CommentList;
