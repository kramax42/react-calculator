import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '@components/button/ButtonFC';
import {
  clearHistory,
  toggleHistoryVisibility,
} from '@store/reducers/calculator.reducer';

import { ControlPanelStyled, Title } from '../styled';

function ControlPanelFC() {
  const dispatch = useDispatch();
  const isHistoryVisible = useSelector(
    (state) => state.calculator.isHistoryVisible,
  );

  const handleClearHistory = () => {
    dispatch(clearHistory());
  };

  const handleToggleHistoryVisibility = () => {
    dispatch(toggleHistoryVisibility());
  };

  return (
    <div>
      <Title>Control Panel</Title>
      <ControlPanelStyled>
        <Button
          id="toggleHistoryVisibility"
          onClick={handleToggleHistoryVisibility}>
          {isHistoryVisible ? 'Hide History' : 'Show History'}
        </Button>
        <Button id="clearHistory" onClick={handleClearHistory}>
          Clear History
        </Button>
      </ControlPanelStyled>
    </div>
  );
}

export const ControlPanel = ControlPanelFC;
