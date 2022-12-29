import styled from 'styled-components';

export const MainLayoutStyled = styled.div`
  width: 100%;
  min-height: 100%;
  max-width: 100vw;
  background-color: ${({ theme }) => theme.bodyBackgroundColor};
`;

export const ChildrenStyled = styled.div`
  width: 100%;
  max-width: 100vw;
  margin: 0 auto;
`;
