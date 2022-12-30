import styled from 'styled-components';
import { transitionDuration } from '@styles/animation';
import { history } from '@styles/components';
import { below } from '@styles/screens';
import { fontSizes, fontWeight, spaces } from '@styles/sizes';

export const HistoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: ${history.sizes.desktop.height}px;
  padding: ${spaces[3]}px;
  padding-left: 0;
  opacity: ${({ open }) => (open ? 1 : 0)};
  transition: ${transitionDuration}s;

  ${below.laptopL`
    max-height: ${history.sizes.laptopL.height}px;
  `}

  ${below.laptopM`
    max-height: ${history.sizes.laptopM.height}px;
  `}

  ${below.laptop`
    max-height: ${history.sizes.laptop.height}px;
    padding: ${spaces[3]}px;
  `}
`;

export const HistoryTitle = styled.p`
  margin: 0 auto ${spaces[3]}px;
  font-size: ${fontSizes[5]}px;
  color: ${({ theme }) => theme.text.color};
`;

export const HistoryItems = styled.div`
  overflow-y: auto;
  font-size: ${fontSizes[3]}px;
  color: ${({ theme }) => theme.text.secondaryColor};
  font-weight: ${fontWeight[3]};
`;

export const HistoryItem = styled.div`
  margin-top: ${spaces[2]}px;
  word-wrap: break-all;
`;
