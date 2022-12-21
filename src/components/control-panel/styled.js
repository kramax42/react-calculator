import styled from 'styled-components';

export const Title = styled.p`
  margin: 0px auto ${({ theme }) => theme.spacer * 2}px;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.xxl}px;
  color: ${({ theme }) => theme.textColor};
`;

export const ControlPanelStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: ${({ theme }) => theme.spacer * 1}px
    ${({ theme }) => theme.spacer * 2}px;
  gap: ${({ theme }) => theme.spacer * 2}px;
`;
