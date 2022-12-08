import React, { Component } from 'react';
import { CalculatorWrapper, CalculatorColumn, HistoryColumn } from '../styled';
import { Display } from '@components/display/DisplayCC';
import { Keypad } from '@components/keypad/KeypadCC';
import { History } from '@components/history/HistoryCC';
import { ControlPanel } from '@components/control-panel/ControlPanelCC';

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
            </CalculatorWrapper >
        );
    }
}


export const Calculator = CalculatorCC;