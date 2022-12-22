import { NavLink } from 'react-router-dom';
import { breakPoints } from '@styles/themes';
import styled from 'styled-components';

export const NavigationLi = styled.li`
  margin-left: ${({ theme }) => theme.spacer * 2}px;
  list-style-type: none;
  font-size: ${({ theme }) => theme.fontSizes.xl}px;
  font-weight: ${({ theme }) => theme.fontWeights.normal};

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
    padding: ${({ theme }) => theme.spacer * 2}px
      ${({ theme }) => theme.spacer * 1}px;
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
    padding-top: ${({ theme }) => theme.spacer * 12}px;
    background-color: ${({ theme }) => theme.headerBackgroundColor};
    transition: transform 0.3s ease-in-out;
    li {
      margin: 0 auto;
      color: ${({ theme }) => theme.headerTextColor};
    }
  }
`;

export const NavigationLinkStyled = styled(NavLink)`
  position: relative;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes.xl}px;
  color: ${({ theme }) => theme.headerTextColor};
  opacity: ${({ isActive }) => (isActive ? 1 : 0.7)};

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: ${({ theme }) => theme.borderWidth * 2}px;
    background-color: ${({ theme }) => theme.headerTextColor};
    opacity: ${({ isActive }) => (isActive ? 1 : 0.7)};
    bottom: ${({ theme }) => theme.borderWidth * -6}px;
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
