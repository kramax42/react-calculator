import styled from 'styled-components';
import { fontSizes, spaces } from '@styles/sizes';

export const Title = styled.p`
  margin: 0 auto ${spaces[3]}px;
  text-align: center;
  font-size: ${fontSizes[5]}px;
  color: ${({ theme }) => theme.text.color};
`;

export const ControlPanelStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: ${spaces[3]}px ${spaces[3]}px;
  gap: ${spaces[3]}px;
`;
