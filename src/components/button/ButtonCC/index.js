import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ButtonStyled } from '../styled';

class ButtonCC extends Component {
  render() {
    const { props } = this;
    const { children } = props;
    return <ButtonStyled {...props}>{children}</ButtonStyled>;
  }
}

ButtonCC.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export const Button = ButtonCC;
