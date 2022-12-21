import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { routeLinks } from '../links';
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
  isOpen: PropTypes.bool,
};

export const Nav = NavCC;
