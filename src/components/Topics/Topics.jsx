import { useState, useEffect } from "react";
import { getTopics } from "../../utils/api";
import TopicList from "./TopicList";
import { StyledPage, StyledTitle } from "./styles";

function Topics() {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getTopics()
      .then((topicsData) => {
        setTopics(topicsData);
        setIsLoading(false);
      })
      .catch(() => {
        setError("Failed to load topics");
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading topics...</p>;
  if (error) return <p>{error}</p>;

  return (
    <StyledPage>
      <StyledTitle>Topics</StyledTitle>
      <TopicList topics={topics} />
    </StyledPage>
  );
}


export default Topics;