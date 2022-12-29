import styled from 'styled-components';
import { breakPoints } from '@styles/break-points';
import { display } from '@styles/components';
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
  width: ${display.sizes.desktop.width}px;
  word-wrap: normal;

  @media (max-width: ${breakPoints.laptopL}) {
    width: ${display.sizes.laptopL.width}px;
  }

  @media (max-width: ${breakPoints.laptop}) {
    width: ${display.sizes.laptop.width}px;
  }

  @media (max-width: ${breakPoints.tablet}) {
    width: ${display.sizes.tablet.width}px;
  }

  @media (max-width: ${breakPoints.mobileL}) {
    width: ${display.sizes.mobileL.width}px;
  }

  @media (max-width: ${breakPoints.mobileM}) {
    width: ${display.sizes.mobileM.width}px;
  }

  @media (max-width: ${breakPoints.mobileS}) {
    width: ${display.sizes.mobileS.width}px;
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
