import { useEffect, useState } from "react";
import ArticleList from "../Articles/ArticleList";
import { Link } from "react-router-dom";
import { getArticles } from "../../utils/api";

function Home() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getArticles("created_at", "desc", "")
      .then((data) => {
        setArticles(data.slice(0, 5)); // show only latest 5 articles
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Failed to load articles");
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading latest articles...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Latest Articles</h1>
      <ArticleList articles={articles} />
      <div style={{ marginTop: "1rem" }}>
        <Link to="/articles">See all articles →</Link>
      </div>
    </div>
  );
}

export default Home;
