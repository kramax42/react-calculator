import styled from 'styled-components';

export const MainLayoutStyled = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: ${({ theme }) => theme.bodyBackgroundColor};
`;

export const ChildrenStyled = styled.div`
  width: 100%;
  margin: 0 auto;
`;
