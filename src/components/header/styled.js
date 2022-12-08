import styled from 'styled-components';

export const HeaderStyled = styled.div`
  display: flex;
  height: ${({ theme }) => theme.headerHeight}px;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.headerBackgroundColor};
  color: ${({ theme }) => theme.headerTextColor};
  padding: ${({ theme }) => theme.spacer * 4}px;
`;

export const HeaderLogo = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl}px;
`;
