import styled from 'styled-components';
import { borderWidth, fontSizes, fontWeight, spaces } from '@styles/sizes';

export const ButtonStyled = styled.button`
  padding: ${spaces[3]}px;
  font-size: ${fontSizes[3]}px;
  font-weight: ${fontWeight[4]};
  background-color: ${({ theme }) => theme.button.backgroundColor};
  color: ${({ theme }) => theme.button.textColor};
  border: ${({ theme }) => (theme.currentTheme === 'dark' ? borderWidth : 0)}px
    solid ${({ theme }) => theme.borderColor};
  cursor: pointer;

  &:hover {
    opacity: 0.92;
  }
`;
