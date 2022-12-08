import React from 'react';
import { CalculatorWrapper, CalculatorColumn, HistoryColumn } from '../styled';
import { Display } from '@components/display/DisplayFC';
import { Keypad } from '@components/keypad/KeypadFC';
import { History } from '@components/history/HistoryFC';
import { ControlPanel } from '@components/control-panel/ControlPanelFC';

const CalculatorFC = () => {
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

export const Calculator = CalculatorFC;