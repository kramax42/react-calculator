import React, { Component } from 'react';
import { routeLinks } from '@constants/routes';
import PropTypes from 'prop-types';

import { NavLi, NavLinkStyled, NavStyled } from '../styled';

class NavCC extends Component {
  render() {
    const { isOpen } = this.props;
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
}

NavCC.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export const Nav = NavCC;
