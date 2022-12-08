import styled from 'styled-components';

export const HorizontalDivider = styled.hr`
  border-top: 1px solid ${({ theme }) => theme.borderColor};
  margin: ${({ theme }) => theme.spacer * 2}px 0;
`;

export const VerticalDivider = styled.div`
  height: 100%;
  border-right: 1px solid ${({ theme }) => theme.borderColor};
`;