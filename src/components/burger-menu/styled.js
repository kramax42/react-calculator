import styled from 'styled-components';
import { breakPoints } from '@styles/break-points';
import { burger } from '@styles/sizes';
import { zIndexes } from '@styles/z-indexes';

export const UpLine = styled.div``;
export const MiddleLine = styled.div``;
export const DownLine = styled.div``;

export const BurgerStyled = styled.div`
  display: none;
  z-index: ${zIndexes.navigation};
  width: ${burger.size}px;
  height: ${burger.size}px;

  @media (max-width: ${breakPoints.laptop}) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: ${burger.lineWidth}px;
    height: ${burger.lineHeight}px;
    background-color: ${({ theme }) => theme.header.textColor};
    border-radius: ${burger.lineBorderRadius}px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      transform: ${({ isOpen }) =>
        isOpen ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
