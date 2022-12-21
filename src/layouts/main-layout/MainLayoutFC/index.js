import React from 'react';
import { Header } from '@components/header/HeaderFC';
import PropTypes from 'prop-types';

import { ChildrenStyled, MainLayoutStyled } from '../styled';

function MainLayoutFC({ children }) {
  return (
    <MainLayoutStyled id="mainLayout">
      <Header />
      <ChildrenStyled>{children}</ChildrenStyled>
    </MainLayoutStyled>
  );
}

MainLayoutFC.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export const MainLayout = MainLayoutFC;
