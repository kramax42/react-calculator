import React, { Component } from 'react';
import { Navigation } from '@components/navigation/NavigationCC';

import { BurgerStyled, DownLine, MiddleLine, UpLine } from '../styled';

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
          <UpLine />
          <MiddleLine />
          <DownLine />
        </BurgerStyled>
        <Navigation isOpen={isOpen} />
      </>
    );
  }
}

export const BurgerMenu = BurgerMenuCC;
