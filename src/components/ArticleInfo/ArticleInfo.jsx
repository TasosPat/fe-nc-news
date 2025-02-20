import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleByID, updateArticleVotes, getCommentsbyArtID, addCommentToArticle } from "../../utils/api";
import { StyledPage } from "./styles";
import CommentList from "./CommentList";
import {
  StyledArticleInfoContainer,
  ImageContainer,
  ArticleDetails,
  ArticleTitle,
  ArticleBody,
  ArticleMeta,
  LoadingWrapper,
  ErrorMessage,
} from "./styles";


function ArticleInfo() {
  const [newComment, setNewComment] = useState("");
  const [votes, setVotes] = useState(0);
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
 
  useEffect(() => {
    setIsLoading(true);
    setError(null);
    getArticleByID(article_id)
      .then((articleData) => {
        setArticle(articleData);
        setVotes(articleData.votes)
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Failed to load article");
        setIsLoading(false);
      });
      getCommentsbyArtID(article_id)
      .then((commentData) => {
        setComments(commentData);
        setIsLoading(false);
      })
  }, [article_id]);


  if (isLoading) {
    return (
      <LoadingWrapper>
        <p>Loading article details...</p>
      </LoadingWrapper>
    );
  }

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  if (!article) {
    return <ErrorMessage>article not found</ErrorMessage>;
  }

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
    .catch(() => {
      setError("Failed to post comment. Please try again.");
      setComments((prevComments) => prevComments.slice(-1));
    });
    setNewComment("");
    document.getElementById("new-comment").value = "";
  };

  const handleVotes = (newVotes) => {
    setVotes((currentVotes) => currentVotes + newVotes);
    setError(null);
    updateArticleVotes({ inc_votes: newVotes }, article_id)
    .then(() => {})
    .catch((err) => {
      setVotes((currentVotes) => currentVotes - newVotes);
      setError("Your vote was not successful. Please try again!");
    });
  };

  return (
    <StyledArticleInfoContainer>
      <ImageContainer>
        <img src={article.article_img_url} alt={article.title} />
      </ImageContainer>

      <ArticleDetails>
        <ArticleTitle>{article.title}</ArticleTitle>
        <ArticleBody>{article.body}</ArticleBody>

        <ArticleMeta>
          <span>Topic: {article.topic}</span>
          <span>•</span>
          <span>Author: {article.author}</span>
          <span>•</span>
          <span>Votes: {votes}</span>
        </ArticleMeta>
      </ArticleDetails>
      <button onClick={() => {handleVotes(1)}}>Vote +1</button>
      <StyledPage>
      <CommentList comments={comments} />
    </StyledPage>
    <label htmlFor="new-comment">Add Comment:</label>
  <input type="text" onChange={handleInputChange} id="new-comment" name="new-comment"/>
  <button onClick={handleSubmit}>Post Comment</button>
    </StyledArticleInfoContainer>
  );
}

export default ArticleInfo;
