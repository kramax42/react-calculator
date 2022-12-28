import { breakPoints } from '@styles/break-points';
import styled from 'styled-components';

export const CalculatorWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  flex-direction: row;

  @media (max-width: ${breakPoints.laptop}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${({ theme }) => theme.spacer * 2}px;
`;

export const CalculatorColumn = styled(Column)`
  width: min-content;
  min-height: calc(100vh - ${({ theme }) => theme.headerHeight * 1.3}px);
  align-items: flex-end;
  border-right: ${({ theme }) => theme.borderWidth}px solid
    ${({ theme }) => theme.borderColor};
  padding-right: ${({ theme }) => theme.spacer * 2}px;

  @media (max-width: ${breakPoints.laptop}) {
    height: max-content;
    min-height: 0;
    border-right: 0;
  }
`;

export const HistoryColumn = styled(Column)`
  height: 100%;
  max-height: 550px;

  & > div {
    @media (max-width: ${breakPoints.laptop}) {
      padding: ${({ theme }) => theme.spacer * 2.5}px;
      border-top: 1px solid ${({ theme }) => theme.borderColor};
    }
  }

  @media (max-width: ${breakPoints.laptop}) {
    max-height: 600px;
  }
`;
