import styled from 'styled-components';
import { breakPoints } from '@styles/break-points';
import { fontSizes, fontWeights, margins, paddings } from '@styles/sizes';

export const HistoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 350px;
  max-height: 100%;
  padding: ${paddings.xl}px;
  padding-left: 0;
  opacity: ${({ open }) => (open ? 1 : 0)};
  transition: 0.3s;
  @media (max-width: ${breakPoints.laptop}) {
    max-height: 200%;
    min-height: 0;
    padding: ${paddings.xl}px;
  }
`;

export const HistoryTitle = styled.p`
  margin: 0px auto ${margins.xl}px;
  font-size: ${fontSizes.xxl}px;
  color: ${({ theme }) => theme.text.color};
`;

export const HistoryItems = styled.div`
  overflow-y: auto;
  font-size: ${fontSizes.md}px;
  color: ${({ theme }) => theme.text.secondaryColor};
  font-weight: ${fontWeights.thin};
`;

export const HistoryItem = styled.div`
  margin-top: ${margins.md}px;
  max-width: 220px;
  word-wrap: break-all;
  @media (max-width: ${breakPoints.laptop}) {
    max-width: 300px;
  }
`;
