import { useNavigate } from "react-router-dom";
import { StyledArticleCard } from "./styles";

function ArticleCard({ article }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/articles/${article.article_id}`);
  };
  return (
    <StyledArticleCard onClick={handleClick}>
      <img src={article.article_img_url} alt={article.title} />
      <h2>{article.title}</h2>
      <h3>{article.topic}</h3>
      <p>{article.body}</p>
      <p>{article.author}</p>
      <p>{article.created_at}</p>
      <p>{article.votes}</p>
    </StyledArticleCard>
  );
}

export default ArticleCard;