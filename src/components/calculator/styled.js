import styled from 'styled-components';
import { below } from '@styles/screens';
import { borderWidth, headerHeight, spaces } from '@styles/sizes';

export const CalculatorWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  flex-direction: row;

  ${below.laptop`
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${spaces[4]}px;
`;

export const CalculatorColumn = styled(Column)`
  width: min-content;
  min-height: calc(100vh - ${headerHeight * 1.1}px);
  align-items: flex-end;
  border-right: ${borderWidth}px solid ${({ theme }) => theme.borderColor};
  padding-right: ${spaces[4]}px;

  ${below.laptop`
    height: max-content;
    min-height: 0;
    border-right: 0;
  `}
`;

export const HistoryColumn = styled(Column)`
  height: 100%;
  & > div {
    ${below.laptop`
      padding: ${spaces[3]}px;
      border-top: 1px solid ${({ theme }) => theme.borderColor};
    `}
  }
`;
