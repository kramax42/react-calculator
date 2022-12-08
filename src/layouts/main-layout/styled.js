import styled from 'styled-components';

export const MainLayoutStyled = styled.div`
  width: 100%;
  min-height: 100%;
  max-width: 100vw;
  background-color: ${({ theme }) => theme.background};
`;
export const ChildrenStyled = styled.div`
  width: 100%;
  max-width: 100vw;
  min-height: calc(100vh - ${({ theme }) => theme.headerHeight * 1.3}px);
  margin: 0 auto;
`;