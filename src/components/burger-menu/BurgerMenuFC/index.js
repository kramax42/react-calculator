import React, { useState } from 'react';
import { Navigation } from '@components/navigation/NavigationFC';

import { BurgerStyled, DownLine, MiddleLine, UpLine } from '../styled';

function BurgerMenuFC() {
  const [isOpen, setIsOpen] = useState(false);
  const onClickHandler = () => setIsOpen((open) => !open);

  return (
    <>
      <BurgerStyled id="burger" isOpen={isOpen} onClick={onClickHandler}>
        <UpLine />
        <MiddleLine />
        <DownLine />
      </BurgerStyled>
      <Navigation isOpen={isOpen} />
    </>
  );
}

export const BurgerMenu = BurgerMenuFC;
