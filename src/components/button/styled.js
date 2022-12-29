import styled from 'styled-components';
import { borderWidth, fontSizes, fontWeights, spacer } from '@styles/sizes';

export const ButtonStyled = styled.button`
  padding: ${spacer * 2}px;
  font-size: ${fontSizes.md}px;
  font-weight: ${fontWeights.normal};
  background-color: ${({ theme }) => theme.button.backgroundColor};
  color: ${({ theme }) => theme.button.textColor};
  border: ${({ theme }) => (theme.currentTheme === 'dark' ? borderWidth : 0)}px
    solid ${({ theme }) => theme.borderColor};
  cursor: pointer;

  &:hover {
    opacity: 0.92;
  }
`;
