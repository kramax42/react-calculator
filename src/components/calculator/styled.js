import styled from 'styled-components';
import { breakPoints } from '@styles/break-points';
import { borderWidth, headerHeight, paddings } from '@styles/sizes';

export const CalculatorWrapper = styled.div`
  display: flex;
  width: 100%;
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
  padding: ${paddings.xl}px;
`;

export const CalculatorColumn = styled(Column)`
  width: min-content;
  min-height: calc(100vh - ${headerHeight * 1.1}px);
  align-items: flex-end;
  border-right: ${borderWidth}px solid ${({ theme }) => theme.borderColor};
  padding-right: ${paddings.xl}px;

  @media (max-width: ${breakPoints.laptop}) {
    height: max-content;
    min-height: 0;
    border-right: 0;
  }
`;

export const HistoryColumn = styled(Column)`
  height: 100%;
  max-height: 400px;

  & > div {
    @media (max-width: ${breakPoints.laptop}) {
      padding: ${paddings.xxl}px;
      border-top: 1px solid ${({ theme }) => theme.borderColor};
    }
  }

  @media (max-width: ${breakPoints.laptop}) {
    max-height: 500px;
  }
`;
