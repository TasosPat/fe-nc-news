import { StyledArticleList } from "./styles";
import ArticleCard from "./ArticleCard";

function ArticleList({ articles }) {
  return (
    <StyledArticleList>
      {articles.map((article) => (
        <ArticleCard key={article.article_id} article={article} />
      ))}
    </StyledArticleList>
  );
}

export default ArticleList;