import { NavLink } from 'react-router-dom';
import { breakPoints } from '@styles/break-points';
import { borderWidth, fontSizes, fontWeights, spacer } from '@styles/sizes';
import styled from 'styled-components';

export const NavigationLi = styled.li`
  margin-left: ${spacer * 2}px;
  list-style-type: none;
  font-size: ${fontSizes.xl}px;
  font-weight: ${fontWeights.normal};

  &:hover {
    cursor: pointer;
    text-decoration: none;
  }
`;

export const NavigationStyled = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  list-style: none;
  li {
    padding: ${spacer * 2}px ${spacer * 1}px;
  }
  @media (max-width: ${breakPoints.laptop}) {
    flex-flow: column nowrap;
    position: fixed;
    transform: ${({ isOpen }) =>
      isOpen ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    padding-top: ${spacer * 12}px;
    background-color: ${({ theme }) => theme.header.backgroundColor};
    transition: transform 0.3s ease-in-out;
    li {
      margin: 0 auto;
      color: ${({ theme }) => theme.header.textColor};
    }
  }
`;

export const NavigationLinkStyled = styled(NavLink)`
  position: relative;
  text-decoration: none;
  font-size: ${fontSizes.xl}px;
  color: ${({ theme }) => theme.header.textColor};
  opacity: ${({ isActive }) => (isActive ? 1 : 0.7)};

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: ${borderWidth * 2}px;
    background-color: ${({ theme }) => theme.header.textColor};
    opacity: ${({ isActive }) => (isActive ? 1 : 0.7)};
    bottom: ${borderWidth * -6}px;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  &:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }

  &:active,
  &:hover,
  &:focus {
    opacity: 1;
  }
`;
