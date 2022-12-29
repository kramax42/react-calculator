import styled from 'styled-components';
import { breakPoints } from '@styles/break-points';
import { fontSizes } from '@styles/sizes';

export const Entry = styled.div`
  overflow-x: auto;
  max-width: 100%;
  word-wrap: normal;
  text-align: right;
  color: ${({ theme }) => theme.text.color};
  font-size: ${fontSizes.xxxl}px;
`;

export const DisplayStyled = styled.div`
  max-width: 600px;
  word-wrap: normal;

  @media (max-width: ${breakPoints.laptopL}) {
    max-width: 500px;
  }

  @media (max-width: ${breakPoints.laptop}) {
    max-width: 460px;
  }

  @media (max-width: ${breakPoints.tablet}) {
    max-width: 350px;
  }

  @media (max-width: ${breakPoints.mobileL}) {
    max-width: 270px;
  }

  @media (max-width: ${breakPoints.mobileM}) {
    max-width: 255px;
  }

  @media (max-width: ${breakPoints.mobileS}) {
    max-width: 215px;
  }
`;

export const Expression = styled.div`
  overflow-x: auto;
  max-width: 100%;
  text-align: right;
  word-wrap: break-all;
  color: ${({ theme }) => theme.text.secondaryColor};
  font-size: ${fontSizes.xl}px;
`;
