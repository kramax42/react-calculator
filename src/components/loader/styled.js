import { colors } from '@styles/colors';
import { spacer } from '@styles/sizes';
import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  width: ${spacer * 8}px;
  height: ${spacer * 8}px;
  margin: ${spacer * 2}px auto;
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 3px solid ${({ theme }) => theme.textColor};
  border-right: 3px solid ${colors.secondaryLight};
  border-bottom: 3px solid ${colors.secondaryLight};
  border-left: 3px solid ${({ theme }) => theme.text.color};
  background: transparent;
  border-radius: 50%;
`;
