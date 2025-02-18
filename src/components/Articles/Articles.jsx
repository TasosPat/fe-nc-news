import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getArticles } from "../../utils/api";
import ArticleList from "./ArticleList";
import { StyledPage, StyledTitle } from "./styles";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const topic = searchParams.get("topic");

  useEffect(() => {
    setIsLoading(true);
    getArticles(topic)
      .then((articleData) => {
        setArticles(articleData);
        setIsLoading(false);
      })
      .catch(() => {
        setError("Failed to load articles");
        setIsLoading(false);
      });
  }, [topic]);

  if (isLoading) return <p>Loading articles...</p>;
  if (error) return <p>{error}</p>;

  return (
    <StyledPage>
      <StyledTitle>
        {topic ? `${topic} Articles` : "All Articles"}
      </StyledTitle>
      <ArticleList articles={articles} />
    </StyledPage>
  );
}

export default Articles;
