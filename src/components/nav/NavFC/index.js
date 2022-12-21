import React from 'react';
import PropTypes from 'prop-types';

import { routeLinks } from '../links';
import { NavLi, NavLinkStyled, NavStyled } from '../styled';

function NavFC({ isOpen }) {
  return (
    <NavStyled isOpen={isOpen}>
      {routeLinks.map(({ path, label }) => (
        <NavLi key={label}>
          <NavLinkStyled to={path}>{label}</NavLinkStyled>
        </NavLi>
      ))}
    </NavStyled>
  );
}

NavFC.propTypes = {
  isOpen: PropTypes.bool,
};

export const Nav = NavFC;
