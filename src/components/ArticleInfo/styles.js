import styled from "styled-components";

export const StyledTitle = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.xxlarge};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const StyledPage = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const StyledArticleInfoContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.background.main};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: 0 2px 8px ${({ theme }) => theme.colors.shadow};
  margin: 0;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    padding: ${({ theme }) => theme.spacing.md};
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  max-width: 600px;

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    box-shadow: 0 2px 8px ${({ theme }) => theme.colors.shadow};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 100%;

    img {
      height: 300px;
    }
  }
`;

export const ArticleDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const ArticleTitle = styled.h1`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.xxlarge};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const ArticlePrice = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSizes.xlarge};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
  margin: ${({ theme }) => theme.spacing.sm} 0;
`;

export const ArticleBody = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.medium};
  line-height: 1.6;
  margin: ${({ theme }) => theme.spacing.md} 0;
`;

export const ArticleMeta = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};

  span {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.xs};
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const ErrorMessage = styled.div`
  text-align: center;
  color: #e74c3c;
  padding: ${({ theme }) => theme.spacing.xl};
  background: #fdf0ed;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  margin: ${({ theme }) => theme.spacing.xl} 0;
`;

export const StyledCommentList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: ${({ theme }) => theme.spacing.md};
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

export const StyledCommentCard = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme }) => theme.spacing.md};
  cursor: pointer;
  background: ${({ theme }) => theme.colors.background.main};
  transition: ${({ theme }) => theme.transitions.default};

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px ${({ theme }) => theme.colors.shadow};
  }
`;