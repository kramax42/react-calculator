import styled, { keyframes } from 'styled-components';
import { spinner } from '@styles/components';
import { margins } from '@styles/sizes';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  width: ${spinner.width}px;
  height: ${spinner.height}px;
  margin: ${margins.xl}px auto;
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: ${spinner.borderWidth}px solid ${({ theme }) => theme.text.color};
  border-right: ${spinner.borderWidth}px solid
    ${({ theme }) => theme.text.secondaryColor};
  border-bottom: ${spinner.borderWidth}px solid
    ${({ theme }) => theme.text.secondaryColor};
  border-left: ${spinner.borderWidth}px solid ${({ theme }) => theme.text.color};
  background: transparent;
  border-radius: 50%;
`;
