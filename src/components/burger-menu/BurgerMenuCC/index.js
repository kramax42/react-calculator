import React, { Component } from 'react';
import { Nav } from '@components/nav/NavCC';

import { BurgerStyled } from '../styled';

class BurgerMenuCC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  onClickHandler = () => {
    this.setState((state) => ({ ...state, isOpen: !state.isOpen }));
  };

  render() {
    const { isOpen } = this.state;
    return (
      <>
        <BurgerStyled id="burger" isOpen={isOpen} onClick={this.onClickHandler}>
          <div />
          <div />
          <div />
        </BurgerStyled>
        <Nav isOpen={isOpen} />
      </>
    );
  }
}

export const BurgerMenu = BurgerMenuCC;
