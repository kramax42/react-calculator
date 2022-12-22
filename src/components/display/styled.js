import { breakPoints } from '@styles/themes';
import styled from 'styled-components';

export const Entry = styled.div`
  overflow-x: auto;
  max-width: 100%;
  word-wrap: normal;
  text-align: right;
  color: ${({ theme }) => theme.textColor};
  font-size: ${({ theme }) => theme.fontSizes.xxxl}px;
`;

export const DisplayStyled = styled.div`
  max-width: 600px;
  word-wrap: normal;

  @media (max-width: ${breakPoints.laptopL}) {
    max-width: 400px;
  }

  @media (max-width: ${breakPoints.laptop}) {
    max-width: 280px;
  }

  @media (max-width: ${breakPoints.tablet}) {
    max-width: 340px;
  }

  @media (max-width: ${breakPoints.mobileL}) {
    max-width: 240px;
  }

  @media (max-width: ${breakPoints.mobileM}) {
    max-width: 240px;
  }

  @media (max-width: ${breakPoints.mobileS}) {
    max-width: 220px;
  }
`;

export const Expression = styled.div`
  overflow-x: auto;
  max-width: 100%;
  text-align: right;
  word-wrap: break-all;
  color: ${({ theme }) => theme.textSecondaryColor};
  font-size: ${({ theme }) => theme.fontSizes.xl}px;
`;
