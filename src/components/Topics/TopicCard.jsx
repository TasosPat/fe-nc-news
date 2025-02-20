import { useNavigate } from "react-router-dom";
import { StyledTopicCard, TopicName } from "./styles";

function TopicCard({ topic }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/articles/?topic=${topic.slug}`)
  };

  return (
    <StyledTopicCard onClick={handleClick}>
      <TopicName>{topic.slug}</TopicName>
    </StyledTopicCard>
  );
}

export default TopicCard;
