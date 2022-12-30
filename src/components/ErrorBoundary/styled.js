import styled from 'styled-components';
import { fontSizes } from '@styles/sizes';

export const ErrorBoundaryStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.text.color};
  font-size: ${fontSizes[4]}px;
`;
