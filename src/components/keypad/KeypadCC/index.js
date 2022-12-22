import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { CALCULATOR_BUTTONS } from '@constants/calculator';
import { updateCalculatorValues } from '@store/reducers/calculator.reducer';
import PropTypes from 'prop-types';

import { GridKeypad, KeypadButton } from '../styled';

class KeypadCC extends PureComponent {
  render() {
    const { handleKeypadButton } = this.props;
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
}

KeypadCC.propTypes = {
  handleKeypadButton: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleKeypadButton: (keypadValue) => () => {
      dispatch(updateCalculatorValues({ keypadValue }));
    },
  };
};

export const Keypad = connect(null, mapDispatchToProps)(KeypadCC);
