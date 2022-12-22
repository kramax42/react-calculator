import React from 'react';
import { routeLinks } from '@constants/routes';
import PropTypes from 'prop-types';

import {
  NavigationLi,
  NavigationLinkStyled,
  NavigationStyled,
} from '../styled';

function NavigationFC({ isOpen }) {
  return (
    <NavigationStyled isOpen={isOpen}>
      {routeLinks.map(({ path, label }) => (
        <NavigationLi key={label}>
          <NavigationLinkStyled to={path}>{label}</NavigationLinkStyled>
        </NavigationLi>
      ))}
    </NavigationStyled>
  );
}

NavigationFC.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export const Navigation = NavigationFC;
