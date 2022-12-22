import { breakPoints } from '@styles/themes';
import styled from 'styled-components';

export const HistoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 350px;
  max-height: 100%;
  padding: ${({ theme }) => theme.spacer * 2}px;
  padding-left: 0;
  opacity: ${({ open }) => (open ? 1 : 0)};
  transition: 0.3s;
  @media (max-width: ${breakPoints.laptop}) {
    max-height: 200%;
    min-height: 0;
    padding: ${({ theme }) => theme.spacer * 2}px;
  }
`;

export const HistoryTitle = styled.p`
  margin: 0px auto ${({ theme }) => theme.spacer * 2}px;
  font-size: ${({ theme }) => theme.fontSizes.xxl}px;
  color: ${({ theme }) => theme.textColor};
`;

export const HistoryItems = styled.div`
  overflow-y: auto;
  font-size: ${({ theme }) => theme.fontSizes.md}px;
  color: ${({ theme }) => theme.textSecondaryColor};
  font-weight: ${({ theme }) => theme.fontWeights.thin};
`;

export const HistoryItem = styled.div`
  margin-top: ${({ theme }) => theme.spacer * 1}px;
  max-width: 220px;
  word-wrap: break-all;
  @media (max-width: ${breakPoints.laptop}) {
    max-width: 300px;
  }
`;
