import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { breakPoints } from '@styles/themes';

export const NavLi = styled.li`
  margin-left: ${({ theme }) => theme.spacer * 2}px;
  list-style-type: none;
  font-size: ${({ theme }) => theme.fontSizes.xl}px;
  font-weight: ${({ theme }) => theme.fontWeights.normal};

  &:hover {
    cursor: pointer;
    text-decoration: none;
  }
`;

export const NavStyled = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  list-style: none;
  li {
    padding: ${({ theme }) => theme.spacer * 2}px ${({ theme }) => theme.spacer * 1}px;
  }
  @media (max-width: ${breakPoints.laptop}) {
    flex-flow: column nowrap;
    position: fixed;
    transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
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

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes.xl}px;
  color: ${({ theme }) => theme.headerTextColor};
  opacity: ${({ isActive }) => isActive ? 1 : 0.7};

  &:active,
  &:hover,
  &:focus {
    opacity: 1;
  }
`;