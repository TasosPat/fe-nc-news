import styled from "styled-components";

export const AppWrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.wide};
  margin: 0 auto;
  padding: ${({ theme }) =>
    `calc(80px + ${theme.spacing.xl}) ${theme.spacing.md} ${theme.spacing.md}`};
  width: 100%;
  box-sizing: border-box;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background.light};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-top: calc(64px + ${({ theme }) => theme.spacing.lg});
  }
`;

export const Container = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.background.main};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: 0 2px 8px ${({ theme }) => theme.colors.shadow};
  margin: ${({ theme }) => theme.spacing.md} 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  width: 100%;
`;

export const Flex = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: ${({ align }) => align || "center"};
  justify-content: ${({ justify }) => justify || "flex-start"};
  flex-wrap: ${({ wrap }) => wrap || "nowrap"};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: ${({ responsive }) => (responsive ? "column" : "row")};
  }
`;