import { breakPoints } from '@styles/break-points';
import styled from 'styled-components';

export const GridKeypad = styled.div`
  display: grid;
  grid-template-areas:
    'power       plus    seven        eight   nine          backSpace'
    'changeSign  minus   four         five    six           cleanEntry'
    'dot         mul     one          two     three         clean'
    'mod         div     leftBracket  zero    rightBracket  equals';

  grid-template-rows: repeat(
    4,
    minmax(${({ theme }) => theme.keypadButtonWidth}px, 160px)
  );
  grid-template-columns: repeat(
    6,
    minmax(${({ theme }) => theme.keypadButtonWidth * 1.2}px, 200px)
  );
  margin-top: ${({ theme }) => theme.spacer * 1}px;
  grid-gap: ${({ theme }) => theme.borderWidth}px;

  @media (max-width: ${breakPoints.laptopL}) {
    grid-template-rows: repeat(
      4,
      minmax(${({ theme }) => theme.keypadButtonWidth * 0.8}px, 140px)
    );
    grid-template-columns: repeat(
      6,
      minmax(${({ theme }) => theme.keypadButtonWidth * 0.9}px, 180px)
    );
  }

  @media (max-width: ${breakPoints.laptop}) {
    grid-template-areas:
      'plus   seven        eight   nine          backSpace'
      'minus  four         five    six           cleanEntry'
      'mul    one          two     three         clean'
      'div    leftBracket  zero    rightBracket  equals'
      'power  changeSign   dot     mod           equals';

    grid-template-rows: repeat(
      5,
      minmax(${({ theme }) => theme.keypadButtonWidth * 0.55}px, 140px)
    );
    grid-template-columns: repeat(
      5,
      minmax(${({ theme }) => theme.keypadButtonWidth * 0.9}px, 200px)
    );
  }

  @media (max-width: ${breakPoints.tablet}) {
    grid-template-rows: repeat(
      5,
      minmax(${({ theme }) => theme.keypadButtonWidth * 0.7}px, 100px)
    );
    grid-template-columns: repeat(
      5,
      minmax(${({ theme }) => theme.keypadButtonWidth * 0.6}px, 150px)
    );
  }

  @media (max-width: ${breakPoints.mobileL}) {
    grid-template-rows: repeat(
      5,
      minmax(${({ theme }) => theme.keypadButtonWidth * 0.45}px, 90px)
    );
    grid-template-columns: repeat(
      5,
      minmax(${({ theme }) => theme.keypadButtonWidth * 0.55}px, 135px)
    );
  }

  @media (max-width: ${breakPoints.mobileM}) {
    grid-template-rows: repeat(
      5,
      minmax(${({ theme }) => theme.keypadButtonWidth * 0.55}px, 80px)
    );
    grid-template-columns: repeat(
      5,
      minmax(${({ theme }) => theme.keypadButtonWidth * 0.55}px, 90px)
    );
  }

  @media (max-width: ${breakPoints.mobileS}) {
    grid-template-rows: repeat(
      5,
      minmax(${({ theme }) => theme.keypadButtonWidth * 0.35}px, 70px)
    );
    grid-template-columns: repeat(
      5,
      minmax(${({ theme }) => theme.keypadButtonWidth * 0.325}px, 75px)
    );
  }
`;

export const KeypadButton = styled.button`
  grid-area: ${(props) => props['data-keypad-value']};
  cursor: pointer;
  border: 0;
  outline: ${({ theme }) => theme.borderWidth}px solid
    ${({ theme }) => theme.borderColor};
  font-size: ${({ theme }) => theme.fontSizes.xxl}px;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.keypadColor};
  background-color: ${({ theme }) => theme.keypadBackground};
  &:hover {
    background-color: ${({ theme }) => theme.borderColor};
  }
`;
