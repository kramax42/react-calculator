import styled from 'styled-components';
import { fontSizes, margins, paddings } from '@styles/sizes';

export const Title = styled.p`
  margin: 0px auto ${margins.xl}px;
  text-align: center;
  font-size: ${fontSizes.xxl}px;
  color: ${({ theme }) => theme.text.color};
`;

export const ControlPanelStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: ${paddings.md}px ${paddings.xl}px;
  gap: ${margins.xl}px;
`;
