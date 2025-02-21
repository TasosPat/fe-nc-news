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
  const [sortBy, setSortBy] = useState(searchParams.get("sort_by") || "created_at");
  const [order, setOrder] = useState(searchParams.get("order") || "asc");
  const [topic, setTopic] = useState(searchParams.get("topic") || "");

  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
  }

  const handleOrderChange = (e) => {
    setOrder(e.target.value);
  }

  const handleTopicChange = (e) => {
    setTopic(e.target.value);
  }

  useEffect(() => {
    setIsLoading(true);
    getArticles(sortBy, order, topic)
      .then((articleData) => {
        setArticles(articleData);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.response.data.msg || "Failed to load articles");
        setIsLoading(false);
      });
  }, [sortBy, order, topic]);

  if (isLoading) return <p>Loading articles...</p>;
  if (error) return <p>{error}</p>;

  return (
    <StyledPage>
           <label htmlFor="sort-by">Sort By:</label>
<select className="dropdown" name="sort-by" id="sort-by" onChange={handleSortByChange}>
  <option value="title">Title</option>
  <option value="topic">Topic</option>
  <option value="author">Author</option>
  <option value="created_at">Created At</option>
  <option value="votes">Votes</option>
</select>

<label htmlFor="order">Order</label>
<select className="dropdown" name="order" id="order" onChange={handleOrderChange}>
  <option value="asc">Ascending</option>
  <option value="desc">Descending</option>
</select>
      <StyledTitle>
        {topic ? `${topic} Articles` : "All Articles"}
      </StyledTitle>
      <ArticleList articles={articles} />
 
    </StyledPage>
  );
}

export default Articles;
