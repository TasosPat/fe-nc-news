import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleByID, updateArticleVotes } from "../../utils/api";
import { StyledPage } from "./styles";
import { useAuth } from "../../contexts/authContext";
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
  const [votes, setVotes] = useState(0);
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { article_id } = useParams();
  const { currentUser } = useAuth();
  const [hasVoted, setHasVoted] = useState(false);

 
  useEffect(() => {
    if (currentUser) {
      const voteKey = `voted-article-${article_id}-${currentUser.username}`;
      setHasVoted(localStorage.getItem(voteKey) === "true");
    }
    setIsLoading(true);
    setError(null);
    getArticleByID(article_id)
      .then((articleData) => {
        setArticle(articleData);
        setVotes(articleData.votes)
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.data.msg || "Failed to load article");
        setIsLoading(false);
      });
     
  }, [currentUser, article_id]);


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

  const handleVotes = () => {
    if(!currentUser) {
      setError("Please log in to vote.");
      return;
    }
    const voteKey = `voted-article-${article_id}-${currentUser.username}`;
    const voteChange = hasVoted ? -1 : 1;
    setVotes((currentVotes) => currentVotes + voteChange);
    setHasVoted(!hasVoted);
    if (hasVoted) {
      localStorage.removeItem(voteKey);
    } else {
      localStorage.setItem(voteKey, "true");
    }

    setError(null);
    updateArticleVotes({ inc_votes: voteChange }, article_id)
    .then(() => {})
    .catch((err) => {
      setVotes((currentVotes) => currentVotes - voteChange);
      setError("Action unsuccessful. Please try again!");
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
      <button onClick={() => {handleVotes()}} disabled={!currentUser}>{hasVoted ? "Undo Vote" : "Vote +1"}</button>
      <StyledPage>
      <CommentList />
    </StyledPage>
    </StyledArticleInfoContainer>
  );
}

export default ArticleInfo;
