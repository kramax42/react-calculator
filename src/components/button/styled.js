import styled from 'styled-components';

export const ButtonStyled = styled.button`
  padding: ${({ theme }) => theme.spacer * 2}px;
  font-size: ${({ theme }) => theme.fontSizes.md}px;
  color: ${({ theme }) => theme.headerTextColor};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  background-color: ${({ theme }) => theme.headerBackgroundColor};
  border: ${({ theme }) => theme.borderWidth}px solid ${({ theme }) => theme.borderColor};
  cursor: pointer;

  &:hover {
      opacity: 0.92;
  }
`;