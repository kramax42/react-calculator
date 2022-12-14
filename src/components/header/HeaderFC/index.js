import React from 'react';

import { BurgerMenu } from '@components/burger-menu/BurgerMenuFC';

import { HeaderLogo, HeaderStyled } from '../styled';

function HeaderFC() {
  return (
    <HeaderStyled>
      <HeaderLogo>Calculator</HeaderLogo>
      <BurgerMenu />
    </HeaderStyled>
  );
}

export const Header = HeaderFC;
