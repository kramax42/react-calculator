import React from 'react';
import { ControlPanel } from '@components/control-panel/ControlPanelFC';
import { Display } from '@components/display/DisplayFC';
import { History } from '@components/history/HistoryFC';
import { Keypad } from '@components/keypad/KeypadFC';

import { CalculatorColumn, CalculatorWrapper, HistoryColumn } from '../styled';

function CalculatorFC() {
  return (
    <CalculatorWrapper>
      <CalculatorColumn>
        <Display />
        <Keypad />
      </CalculatorColumn>
      <HistoryColumn>
        <History />
        <ControlPanel />
      </HistoryColumn>
    </CalculatorWrapper>
  );
}

export const Calculator = CalculatorFC;
