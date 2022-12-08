import styled from 'styled-components';
import { breakPoints } from '@styles/themes';

export const GridKeypad = styled.div`
  max-width: 100vw;
  display: grid;
  grid-template-areas:
    "power       plus    seven        eight   nine          backSpace"
    "changeSign  minus   four         five    six           cleanEntry"
    "dot         mul     one          two     three         clean"
    "mod         div     leftBracket  zero    rightBracket  equals";

  grid-template-rows: repeat(4, minmax(${({ theme }) => theme.keypadButtonWidth}px, 8vw));
  grid-template-columns: repeat(6, minmax(${({ theme }) => theme.keypadButtonWidth}px, 24vw));
  margin-top: ${({ theme }) => theme.spacer * 1}px;
  grid-gap: ${({ theme }) => theme.borderWidth}px;

  @media (max-width: ${breakPoints.laptop}) {
    grid-template-areas:
    "plus   seven        eight   nine          backSpace"
    "minus  four         five    six           cleanEntry"
    "mul    one          two     three         clean"
    "div    leftBracket  zero    rightBracket  equals"
    "power  changeSign   dot     mod           equals";

    grid-template-rows: repeat(5, minmax(${({ theme }) => theme.keypadButtonWidth * 0.6}px, 8vw));
    grid-template-columns: repeat(5, minmax(${({ theme }) => theme.keypadButtonWidth * 0.6}px, 8vw));
  }

  @media (max-width: ${breakPoints.mobileL}) {
    grid-template-areas:
    "plus   seven        eight   nine          backSpace"
    "minus  four         five    six           cleanEntry"
    "mul    one          two     three         clean"
    "div    leftBracket  zero    rightBracket  equals"
    "power  changeSign   dot     mod           equals";

    grid-template-rows: repeat(5, minmax(${({ theme }) => theme.keypadButtonWidth * 0.68}px, 8vw));
    grid-template-columns: repeat(5, minmax(${({ theme }) => theme.keypadButtonWidth * 0.68}px, 8vw));
  }

  @media (max-width: ${breakPoints.mobileS}) {
    grid-template-areas:
    "plus   seven        eight   nine          backSpace"
    "minus  four         five    six           cleanEntry"
    "mul    one          two     three         clean"
    "div    leftBracket  zero    rightBracket  equals"
    "power  changeSign   dot     mod           equals";

    grid-template-rows: repeat(5, minmax(${({ theme }) => theme.keypadButtonWidth * 0.35}px, 4vw));
    grid-template-columns: repeat(5, minmax(${({ theme }) => theme.keypadButtonWidth * 0.35}px, 4vw));
  }
`;

export const KeypadButton = styled.button`
  grid-area:  ${props => props['data-keypad-value']};
  cursor: pointer;
  border: 0;
  outline: ${({ theme }) => theme.borderWidth}px solid ${({ theme }) => theme.borderColor};
  font-size: ${({ theme }) => theme.fontSizes.xxl}px;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.keypadColor};
  background-color: ${({ theme }) => theme.keypadBackground};
  &:hover {
      background-color: ${({ theme }) => theme.borderColor};
  }
`;