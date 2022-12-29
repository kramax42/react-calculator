import styled, { keyframes } from 'styled-components';
import { spacer } from '@styles/sizes';

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
  border-top: 3px solid ${({ theme }) => theme.text.color};
  border-right: 3px solid ${({ theme }) => theme.text.secondaryColor};
  border-bottom: 3px solid ${({ theme }) => theme.text.secondaryColor};
  border-left: 3px solid ${({ theme }) => theme.text.color};
  background: transparent;
  border-radius: 50%;
`;
