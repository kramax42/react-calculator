import React, { Component } from 'react';
import { ControlPanel } from '@components/control-panel/ControlPanelCC';
import { Display } from '@components/display/DisplayCC';
import { History } from '@components/history/HistoryCC';
import { Keypad } from '@components/keypad/KeypadCC';

import { CalculatorColumn, CalculatorWrapper, HistoryColumn } from '../styled';

class CalculatorCC extends Component {
  render() {
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
}

export const Calculator = CalculatorCC;
