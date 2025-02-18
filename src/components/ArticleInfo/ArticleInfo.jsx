import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleByID } from "../../utils/api";
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
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { article_id } = useParams();
  console.log(article_id);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    getArticleByID(article_id)
      .then((articleData) => {
        setArticle(articleData);
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
        </ArticleMeta>
      </ArticleDetails>
    </StyledArticleInfoContainer>
  );
}

export default ArticleInfo;
