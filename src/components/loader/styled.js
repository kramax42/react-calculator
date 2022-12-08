import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  width: ${({ theme }) => theme.spacer * 8}px;
  height: ${({ theme }) => theme.spacer * 8}px;
  margin : ${({ theme }) => theme.spacer * 2}px auto;
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 3px solid ${({ theme }) => theme.textColor};
  border-right: 3px solid ${({ theme }) => theme.colors.secondaryLight};
  border-bottom: 3px solid ${({ theme }) => theme.colors.secondaryLight};
  border-left: 3px solid ${({ theme }) => theme.textColor};
  background: transparent;
  border-radius: 50%;
`;