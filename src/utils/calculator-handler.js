import { CALCULATOR_BUTTONS, KEYPAD_OPERATORS } from '@constants/calculator';
import { calculateExpression } from '@utils/expression-parser';

const operators = Object.values(KEYPAD_OPERATORS).join('');

const toFullWideNumberString = (str) => {
  if (str === '') {
    return '';
  }

  // Using cast entry to number for converting .3 to 0.3
  const num = Number(str);
  return num !== Infinity && num !== -Infinity
    ? num.toLocaleString('en-US', { useGrouping: false })
    : String(num);
};

const isValuesValidForHistory = (expression, result) => {
  return Boolean(
    expression !== '' &&
      expression !== result &&
      Number(result) !== Infinity &&
      !Number.isNaN(Number(result)),
  );
};

const isLastExpressionCharOperator = (expression, entry) => {
  return Boolean(
    operators.includes(expression.at(-1)) &&
      expression.at(-1) !== CALCULATOR_BUTTONS.leftBracket &&
      expression.at(-1) !== CALCULATOR_BUTTONS.rightBracket &&
      entry === '',
  );
};

const isLeftBracketPrecedingOperator = (expression, entry) => {
  return Boolean(
    expression.at(-1) === CALCULATOR_BUTTONS.leftBracket && entry === '',
  );
};

const getCalculatorOperations = ({ entry, expression }) => {
  const newState = { entry, expression, newHistoryItems: [] };

  const calculatorOperations = {
    [CALCULATOR_BUTTONS.equals]: () => {
      const newExpression = expression + toFullWideNumberString(entry);
      const newResult = calculateExpression(newExpression);

      if (isValuesValidForHistory(newExpression, newResult)) {
        newState.newHistoryItems.push({
          calculatedExpression: `${newExpression} = ${newResult}`,
        });
      }

      newState.expression = '';
      newState.entry = toFullWideNumberString(newResult);
      return newState;
    },
    [CALCULATOR_BUTTONS.clean]: () => {
      newState.expression = '';
      newState.entry = '';
      return newState;
    },
    [CALCULATOR_BUTTONS.cleanEntry]: () => {
      newState.entry = '';
      return newState;
    },
    [CALCULATOR_BUTTONS.backSpace]: () => {
      if (entry.length) {
        newState.entry = entry.slice(0, entry.length - 1) || '';
      } else {
        newState.expression = expression.slice(0, expression.length - 1) || '';
      }
      return newState;
    },
    [CALCULATOR_BUTTONS.changeSign]: () => {
      if (entry) {
        newState.entry = String(Number(toFullWideNumberString(entry)) * -1);
      }
      return newState;
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
      return newState;
    },
    [CALCULATOR_BUTTONS.rightBracket]: (keypadValue) => {
      if (expression.at(-1) === CALCULATOR_BUTTONS.rightBracket) {
        newState.expression = expression + keypadValue;
      } else {
        newState.expression = expression + Number(entry) + keypadValue;
      }

      newState.entry = '';
      return newState;
    },
    [CALCULATOR_BUTTONS.dot]: () => {
      if (!entry.includes(CALCULATOR_BUTTONS.dot)) {
        newState.entry = entry + CALCULATOR_BUTTONS.dot;
      }
      return newState;
    },
    operator: (keypadValue) => {
      if (isLastExpressionCharOperator(expression, entry)) {
        newState.expression = expression.slice(0, -1) + keypadValue;
      } else if (isLeftBracketPrecedingOperator(expression, entry)) {
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
      return newState;
    },
  };

  return calculatorOperations;
};

const isIncorrectEntry = (entry) => {
  return (
    Number(entry) === Infinity ||
    Number(entry) === -Infinity ||
    (Number.isNaN(entry) && entry !== CALCULATOR_BUTTONS.dot)
  );
};

export const calculatorHandler = ({
  keypadValue,
  entry: prevEntry,
  expression,
}) => {
  let entry = prevEntry;
  if (isIncorrectEntry(entry)) {
    entry = '';
  }

  const calculatorOperations = getCalculatorOperations({
    entry,
    expression,
  });

  const isNonMathOperation = (keypadValue) =>
    Boolean(calculatorOperations[keypadValue]);

  const isMathOperator = (keypadValue) => operators.includes(keypadValue);

  if (isNonMathOperation(keypadValue)) {
    const getNewStateByNonMathOperation = calculatorOperations[keypadValue];
    return getNewStateByNonMathOperation(keypadValue);
  }

  if (isMathOperator(keypadValue)) {
    const getNewStateByMathOperation = calculatorOperations.operator;
    return getNewStateByMathOperation(keypadValue);
  }

  const state = {
    entry,
    expression,
    newHistoryItems: [],
  };

  const MAX_ENTRY_LENGTH = 16;
  if (entry.length < MAX_ENTRY_LENGTH) {
    return {
      ...state,
      entry: (entry === '0' ? '' : entry) + keypadValue,
    };
  }

  return state;
};
