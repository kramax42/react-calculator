import React from 'react';
import { useDispatch } from 'react-redux';

import { CALCULATOR_BUTTONS } from '@constants/calculator';
import { updateCalculatorValues } from '@store/reducers/calculator.reducer';

import { GridKeypad, KeypadButton } from '../styled';

function KeypadFC() {
  const dispatch = useDispatch();
  const handleKeypadButton = (keypadValue) => () => {
    dispatch(updateCalculatorValues({ keypadValue }));
  };

  return (
    <GridKeypad>
      {Object.keys(CALCULATOR_BUTTONS).map((keypadValue, index) => {
        return (
          <KeypadButton
            key={keypadValue}
            data-keypad-value={keypadValue}
            onClick={handleKeypadButton(
              Object.values(CALCULATOR_BUTTONS)[index],
            )}>
            {CALCULATOR_BUTTONS[keypadValue]}
          </KeypadButton>
        );
      })}
    </GridKeypad>
  );
}

export const Keypad = KeypadFC;
