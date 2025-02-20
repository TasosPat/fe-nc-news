import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleByID, updateArticleVotes } from "../../utils/api";
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
  const [votes, setVotes] = useState(0);
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { article_id } = useParams();
 
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
      <CommentList />
    </StyledPage>
    </StyledArticleInfoContainer>
  );
}

export default ArticleInfo;
