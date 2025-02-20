import styled from "styled-components";

export const StyledPage = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const StyledTitle = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.xxlarge};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const StyledTopicList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
`;

export const StyledTopicCard = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-color: #d0d0d0;
  }
`;

export const TopicName = styled.h3`
  margin: 0 0 10px 0;
  color: #2c3e50;
  font-size: 1.2rem;
  font-weight: 600;
  transition: color 0.3s ease;

  ${StyledTopicCard}:hover & {
    color: #3498db;
  }
`;
