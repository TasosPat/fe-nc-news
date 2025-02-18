import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCommentsbyArtID } from "../../utils/api";
import CommentList from "./CommentList";
import { StyledPage, StyledTitle } from "./styles";

function Comments() {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getCommentsbyArtID(article_id)
      .then((commentData) => {
        setComments(commentData);
        setIsLoading(false);
      })
      .catch(() => {
        setError("Failed to load comments");
        setIsLoading(false);
      });
  }, [article_id]);

  if (isLoading) return <p>Loading comments...</p>;
  if (error) return <p>{error}</p>;

  return (
    <StyledPage>
      <CommentList comments={comments} />
    </StyledPage>
  );
}

export default Comments;