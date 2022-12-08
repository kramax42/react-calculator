import React, { Component, memo } from 'react';
import PropTypes from 'prop-types';
import { KeypadButton, GridKeypad } from '../styled';
import { CALCULATOR_BUTTONS } from "@constants/calculator"
import { updateCalculatorValues } from '@store/reducers/calculator.reducer';
import { connect } from 'react-redux';

class KeypadCC extends Component {
  render() {
    const { handleKeypadButton } = this.props;
    return (
      <GridKeypad>
        {Object.keys(CALCULATOR_BUTTONS).map((keypadValue, index) => {
          return (
            <KeypadButton
              key={keypadValue}
              data-keypad-value={keypadValue}
              onClick={handleKeypadButton(Object.values(CALCULATOR_BUTTONS)[index])}>
              {CALCULATOR_BUTTONS[keypadValue]}
            </KeypadButton>
          );
        })}
      </GridKeypad>
    );
  }
};

KeypadCC.propTypes = {
  handleKeypadButton: PropTypes.func
}

const mapDispatchToProps = dispatch => {
  return {
    handleKeypadButton: (keypadValue) => () => {
      dispatch(updateCalculatorValues({ keypadValue }))
    }
  }
}

export const Keypad = memo(connect(null, mapDispatchToProps)(KeypadCC));

