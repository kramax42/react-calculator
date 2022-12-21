import React, { Component } from 'react';
import { BurgerMenu } from '@components/burger-menu/BurgerMenuCC';

import { HeaderLogo, HeaderStyled } from '../styled';

class HeaderCC extends Component {
  render() {
    return (
      <HeaderStyled>
        <HeaderLogo>Calculator</HeaderLogo>
        <BurgerMenu />
      </HeaderStyled>
    );
  }
}

export const Header = HeaderCC;
