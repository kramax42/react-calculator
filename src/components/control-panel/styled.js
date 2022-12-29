import styled from 'styled-components';
import { fontSizes, spacer } from '@styles/sizes';

export const Title = styled.p`
  margin: 0px auto ${spacer * 2}px;
  text-align: center;
  font-size: ${fontSizes.xxl}px;
  color: ${({ theme }) => theme.text.color};
`;

export const ControlPanelStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: ${spacer * 1}px ${spacer * 2}px;
  gap: ${spacer * 2}px;
`;
