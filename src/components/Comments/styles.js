import styled from "styled-components";

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

export const StyledTitle = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.xxlarge};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
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

export const StyledPage = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.wide};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.background.light};
  min-height: 100vh;
`;
