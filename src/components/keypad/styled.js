import styled from 'styled-components';
import { breakPoints } from '@styles/break-points';
import {
  borderWidth,
  fontSizes,
  fontWeights,
  keypadButtonWidth,
  spacer,
} from '@styles/sizes';

export const GridKeypad = styled.div`
  display: grid;
  grid-template-areas:
    'power       plus    seven        eight   nine          backSpace'
    'changeSign  minus   four         five    six           cleanEntry'
    'dot         mul     one          two     three         clean'
    'mod         div     leftBracket  zero    rightBracket  equals';

  grid-template-rows: repeat(4, minmax(${keypadButtonWidth}px, 150px));
  grid-template-columns: repeat(6, minmax(${keypadButtonWidth * 1.2}px, 200px));
  margin-top: ${spacer * 1}px;
  grid-gap: ${borderWidth}px;

  @media (max-width: ${breakPoints.laptopL}) {
    grid-template-rows: repeat(4, minmax(${keypadButtonWidth * 0.68}px, 104px));
    grid-template-columns: repeat(
      6,
      minmax(${keypadButtonWidth * 0.9}px, 180px)
    );
  }

  @media (max-width: ${breakPoints.laptop}) {
    grid-template-areas:
      'plus   seven        eight   nine          backSpace'
      'minus  four         five    six           cleanEntry'
      'mul    one          two     three         clean'
      'div    leftBracket  zero    rightBracket  equals'
      'power  changeSign   dot     mod           equals';

    grid-template-rows: repeat(5, minmax(${keypadButtonWidth * 0.52}px, 132px));
    grid-template-columns: repeat(
      5,
      minmax(${keypadButtonWidth * 0.9}px, 200px)
    );
  }

  @media (max-width: ${breakPoints.tablet}) {
    grid-template-rows: repeat(5, minmax(${keypadButtonWidth * 0.62}px, 90px));
    grid-template-columns: repeat(
      5,
      minmax(${keypadButtonWidth * 0.6}px, 150px)
    );
  }

  @media (max-width: ${breakPoints.mobileL}) {
    grid-template-rows: repeat(5, minmax(${keypadButtonWidth * 0.4}px, 80px));
    grid-template-columns: repeat(
      5,
      minmax(${keypadButtonWidth * 0.55}px, 135px)
    );
  }

  @media (max-width: ${breakPoints.mobileM}) {
    grid-template-rows: repeat(5, minmax(${keypadButtonWidth * 0.55}px, 80px));
    grid-template-columns: repeat(
      5,
      minmax(${keypadButtonWidth * 0.48}px, 82px)
    );
  }

  @media (max-width: ${breakPoints.mobileS}) {
    grid-template-rows: repeat(5, minmax(${keypadButtonWidth * 0.35}px, 68px));
    grid-template-columns: repeat(
      5,
      minmax(${keypadButtonWidth * 0.3}px, 74px)
    );
  }
`;

export const KeypadButton = styled.button`
  grid-area: ${(props) => props['data-keypad-value']};
  cursor: pointer;
  border: 0;
  outline: ${borderWidth}px solid ${({ theme }) => theme.borderColor};
  font-size: ${fontSizes.xxl}px;
  font-weight: ${fontWeights.normal};
  color: ${({ theme }) => theme.keypad.textColor};
  background-color: ${({ theme }) => theme.keypad.backgroundColor};
  &:hover {
    background-color: ${({ theme }) => theme.borderColor};
  }
`;
