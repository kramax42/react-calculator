import styled from 'styled-components';

export const ErrorBoundaryStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.textColor};
  font-size: ${({ theme }) => theme.fontSizes.xxl}px;
`;