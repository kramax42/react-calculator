import styled from 'styled-components';
import { keypadButton } from '@styles/components';
import { below } from '@styles/screens';
import { borderWidth, fontSizes, fontWeight, spaces } from '@styles/sizes';

export const GridKeypad = styled.div`
  display: grid;
  grid-template-areas:
    'power       plus    seven        eight   nine          backSpace'
    'changeSign  minus   four         five    six           cleanEntry'
    'dot         mul     one          two     three         clean'
    'mod         div     leftBracket  zero    rightBracket  equals';

  grid-template-rows: repeat(4, ${keypadButton.sizes.desktop.height}px);
  grid-template-columns: repeat(6, ${keypadButton.sizes.desktop.width}px);
  margin-top: ${spaces[2]}px;
  grid-gap: ${borderWidth}px;

  ${below.laptopL`
    grid-template-rows: repeat(4, ${keypadButton.sizes.laptopL.height}px);
    grid-template-columns: repeat(6, ${keypadButton.sizes.laptopL.width}px);
  `}

  ${below.laptopM`
    grid-template-rows: repeat(4, ${keypadButton.sizes.laptopM.height}px);
    grid-template-columns: repeat(6, ${keypadButton.sizes.laptopM.width}px);
  `}

  ${below.laptop`
    grid-template-areas:
      'plus   seven        eight   nine          backSpace'
      'minus  four         five    six           cleanEntry'
      'mul    one          two     three         clean'
      'div    leftBracket  zero    rightBracket  equals'
      'power  changeSign   dot     mod           equals';

    grid-template-rows: repeat(5, ${keypadButton.sizes.laptop.height}px);
    grid-template-columns: repeat(5, ${keypadButton.sizes.laptop.width}px);
  `}

  ${below.tablet`
    grid-template-rows: repeat(5, ${keypadButton.sizes.tablet.height}px);
    grid-template-columns: repeat(5, ${keypadButton.sizes.tablet.width}px);
  `}

  ${below.mobileL`
    grid-template-rows: repeat(5, ${keypadButton.sizes.mobileL.height}px);
    grid-template-columns: repeat(5, ${keypadButton.sizes.mobileL.width}px);
  `}

  ${below.mobileM`
    grid-template-rows: repeat(5, ${keypadButton.sizes.mobileM.height}px);
    grid-template-columns: repeat(5, ${keypadButton.sizes.mobileM.width}px);
  `}

  ${below.mobileS`
    grid-template-rows: repeat(5, ${keypadButton.sizes.mobileS.height}px);
    grid-template-columns: repeat(5, ${keypadButton.sizes.mobileS.width}px);
  `}
`;

export const KeypadButton = styled.button`
  grid-area: ${(props) => props['data-keypad-value']};
  cursor: pointer;
  border: 0;
  outline: ${borderWidth}px solid ${({ theme }) => theme.borderColor};
  font-size: ${fontSizes[5]}px;
  font-weight: ${fontWeight[4]};
  color: ${({ theme }) => theme.keypad.textColor};
  background-color: ${({ theme }) => theme.keypad.backgroundColor};
  &:hover {
    background-color: ${({ theme }) => theme.borderColor};
  }
`;
