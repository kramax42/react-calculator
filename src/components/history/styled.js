import styled from 'styled-components';
import { transition } from '@styles/animation';
import { breakPoints } from '@styles/break-points';
import { history } from '@styles/components';
import { fontSizes, fontWeights, margins, paddings } from '@styles/sizes';

export const HistoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  max-height: ${history.sizes.desktop.height}px;
  padding: ${paddings.xl}px;
  padding-left: 0;
  opacity: ${({ open }) => (open ? 1 : 0)};
  transition: ${transition}s;

  @media (max-width: ${breakPoints.laptopL}) {
    max-height: ${history.sizes.laptopL.height}px;
  }

  @media (max-width: ${breakPoints.laptop}) {
    max-height: ${history.sizes.laptop.height}px;
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
  word-wrap: break-all;
`;
