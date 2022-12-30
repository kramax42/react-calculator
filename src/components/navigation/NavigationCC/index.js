import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { routeLinks } from '@constants/routes';

import {
  NavigationLi,
  NavigationLinkStyled,
  NavigationStyled,
} from '../styled';

class NavigationCC extends PureComponent {
  render() {
    const { isOpen } = this.props;
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
}

NavigationCC.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export const Navigation = NavigationCC;
