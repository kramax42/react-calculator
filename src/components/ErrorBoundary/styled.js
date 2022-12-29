import { fontSizes } from '@styles/sizes';
import styled from 'styled-components';

export const ErrorBoundaryStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.text.color};
  font-size: ${fontSizes.xxl}px;
`;
