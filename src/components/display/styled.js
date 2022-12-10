import styled from 'styled-components';
import { breakPoints } from '@styles/themes';

export const Entry = styled.div`
  overflow-x: auto;
  max-width: 100%;
  word-wrap: normal;
  text-align: right;
  color: ${({ theme }) => theme.textColor};
  font-size: ${({ theme }) => theme.fontSizes.xxxl}px;
`;

export const DisplayStyled = styled.div`
  max-width: 48vw;
  word-wrap: normal;

  @media (max-width: ${breakPoints.laptop}) {
    max-width: 38vw;
  }

  @media (max-width: ${breakPoints.tablet}) {
    max-width: 70vw;
  }

  @media (max-width: ${breakPoints.mobileL}) {
    max-width: 84vw;
  }

  @media (max-width: ${breakPoints.mobileM}) {
    max-width: 75vw;
  }

  @media (max-width: ${breakPoints.mobileS}) {
    max-width: 66vw;
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