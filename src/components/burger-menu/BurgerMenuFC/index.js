import React, { useState } from 'react';
import { Nav } from '@components/nav/NavFC';

import { BurgerStyled } from '../styled';

function BurgerMenuFC() {
  const [isOpen, setIsOpen] = useState(false);
  const onClickHandler = () => setIsOpen((isOpen) => !isOpen);

  return (
    <>
      <BurgerStyled id="burger" isOpen={isOpen} onClick={onClickHandler}>
        <div />
        <div />
        <div />
      </BurgerStyled>
      <Nav isOpen={isOpen} />
    </>
  );
}

export const BurgerMenu = BurgerMenuFC;
