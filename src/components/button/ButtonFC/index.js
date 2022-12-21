import React from 'react';
import PropTypes from 'prop-types';

import { ButtonStyled } from '../styled';

function ButtonFC({ children, ...props }) {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
}

ButtonFC.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export const Button = ButtonFC;
