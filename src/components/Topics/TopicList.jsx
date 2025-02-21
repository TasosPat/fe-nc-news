import TopicCard from "./TopicCard";
import { StyledTopicList } from "./styles";

function TopicList({ topics }) {
  return (
    <StyledTopicList>
      {topics.map((topic) => (
        <TopicCard key={topic.slug} topic={topic} />
      ))}
    </StyledTopicList>
  );
}

export default TopicList;
