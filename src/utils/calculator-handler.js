import { CALCULATOR_BUTTONS, KEYPAD_OPERATORS } from '@constants/calculator';
import { calculateExpression } from '@utils/expression-parser';

const operators = Object.values(KEYPAD_OPERATORS).join('');
const maxEntryLength = 16;

const toFullWideNumberString = (str) => {
  return Number(str).toLocaleString('en-US', { useGrouping: false });
};

export const calculatorHandler = ({ keypadValue, entry, expression }) => {
  const newState = {
    entry,
    expression,
    newHistoryItems: [],
  };
  const calculatorOperations = {
    [CALCULATOR_BUTTONS.equals]: () => {
      // Using cast entry to number for converting .3 to 0.3
      const newExpression =
        expression + (entry !== '' ? toFullWideNumberString(entry) : '');
      const newResult = calculateExpression(newExpression);

      // Add to history only definite values.
      if (
        newExpression !== '' &&
        newExpression !== newResult &&
        Number(newResult) !== Infinity &&
        !Number.isNaN(Number(newResult))
      ) {
        newState.newHistoryItems.push({
          calculatedExpression: `${newExpression} = ${newResult}`,
        });
      }
      newState.expression = '';
      newState.entry = toFullWideNumberString(newResult);
    },
    [CALCULATOR_BUTTONS.clean]: () => {
      newState.expression = '';
      newState.entry = '';
    },
    [CALCULATOR_BUTTONS.cleanEntry]: () => {
      newState.entry = '';
    },
    [CALCULATOR_BUTTONS.backSpace]: () => {
      if (entry) {
        newState.entry = entry.slice(0, entry.length - 1) || '';
      } else {
        newState.expression = expression.slice(0, expression.length - 1) || '';
      }
    },
    [CALCULATOR_BUTTONS.changeSign]: () => {
      if (entry) {
        newState.entry = (Number(entry) * -1).toString();
      }
    },
    [CALCULATOR_BUTTONS.leftBracket]: (keypadValue) => {
      if (
        (operators.includes(expression.at(-1)) &&
          expression.at(-1) !== CALCULATOR_BUTTONS.leftBracket &&
          expression.at(-1) !== CALCULATOR_BUTTONS.rightBracket &&
          entry === '') ||
        expression === ''
      ) {
        newState.expression = expression + keypadValue;
      }
    },
    [CALCULATOR_BUTTONS.rightBracket]: (keypadValue) => {
      // When last expression char is also right bracket.
      if (expression.at(-1) === CALCULATOR_BUTTONS.rightBracket) {
        newState.expression = expression + keypadValue;
      } else {
        newState.expression = expression + Number(entry) + keypadValue;
      }

      newState.entry = '';
    },
    [CALCULATOR_BUTTONS.dot]: () => {
      if (!entry.includes(CALCULATOR_BUTTONS.dot)) {
        newState.entry = entry + CALCULATOR_BUTTONS.dot;
      }
    },
    operator: (keypadValue) => {
      // For operators that replace another last operators
      if (
        operators.includes(expression.at(-1)) &&
        expression.at(-1) !== CALCULATOR_BUTTONS.leftBracket &&
        expression.at(-1) !== CALCULATOR_BUTTONS.rightBracket &&
        entry === ''
      ) {
        newState.expression = expression.slice(0, -1) + keypadValue;
      }
      // For operators after brackets
      else if (
        expression.at(-1) === CALCULATOR_BUTTONS.leftBracket &&
        entry === ''
      ) {
        // Ignore operator after brackets, except + and -
        if (
          keypadValue === CALCULATOR_BUTTONS.plus ||
          keypadValue === CALCULATOR_BUTTONS.minus
        ) {
          newState.expression = expression + entry + keypadValue;
        }
      } else if (entry) {
        newState.expression =
          expression + toFullWideNumberString(entry) + keypadValue;
      } else {
        newState.expression = expression + entry + keypadValue;
      }

      newState.entry = '';
    },
  };

  // For incorrect for calculation values: such as NaN or Infinity
  if (
    Number(entry) === Infinity ||
    (Number.isNaN(entry) && entry !== CALCULATOR_BUTTONS.dot)
  ) {
    entry = '';
    newState.entry = '';
  }

  // For opereations except math operators(+-%/*)
  if (calculatorOperations[keypadValue]) {
    const calulatorOperation = calculatorOperations[keypadValue];
    calulatorOperation(keypadValue);
  }
  // For math operators(+-%/*) operations
  else if (operators.includes(keypadValue)) {
    const operatorOperation = calculatorOperations.operator;
    operatorOperation(keypadValue);
  } else if (entry.length < maxEntryLength) {
    newState.entry = entry + keypadValue;
  }

  return newState;
};
