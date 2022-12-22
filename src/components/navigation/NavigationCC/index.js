import React, { Component } from 'react';
import { routeLinks } from '@constants/routes';
import PropTypes from 'prop-types';

import {
  NavigationLi,
  NavigationLinkStyled,
  NavigationStyled,
} from '../styled';

class NavigationCC extends Component {
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
