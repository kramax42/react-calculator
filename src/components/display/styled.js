import styled from 'styled-components';
import { display } from '@styles/components';
import { below, SCREEN_SIZES } from '@styles/screens';
import { fontSizes } from '@styles/sizes';

export const Entry = styled.div`
  overflow-x: auto;
  max-width: 100%;
  word-wrap: normal;
  text-align: right;
  color: ${({ theme }) => theme.text.color};
  font-size: ${fontSizes[5]}px;
`;

export const DisplayStyled = styled.div`
  width: ${display.sizes.desktop.width}px;
  word-wrap: normal;

  ${Object.keys(SCREEN_SIZES).reduceRight((acc, screenSize) => {
    return `${
      acc +
      below[screenSize]`
        width: ${display.sizes[screenSize].width}px;`.join('')
    }`;
  }, '')}
`;

export const Expression = styled.div`
  overflow-x: auto;
  max-width: 100%;
  text-align: right;
  word-wrap: break-all;
  color: ${({ theme }) => theme.text.secondaryColor};
  font-size: ${fontSizes[4]}px;
`;
