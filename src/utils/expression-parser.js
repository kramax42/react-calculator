import { KEYPAD_OPERATORS as OPERATORS } from '@constants/calculator';
import {
  AddCommand,
  Calculator,
  DivideCommand,
  ModCommand,
  MultiplyCommand,
  PowerCommand,
  SubtractCommand,
} from '@utils/calculator-command';

export const parseExpression = (expr, calculator) => {
  const peek = (str) => str[0] || '';
  const get = (str) => str.shift();

  const factor = (str) => {
    const makeNumber = (str) => {
      let result = '';
      while (/[0-9\.]/.test(peek(str))) {
        result += get(str);
      }
      return Number(result);
    };

    if (peek(str) === OPERATORS.minus) {
      get(str);
      return -1 * factor(str);
    }
    if (!isNaN(peek(str))) {
      return makeNumber(str);
    }
    if (peek(str) === OPERATORS.leftBracket) {
      get(str); // Сonsume opening parenthesis.
      const number = expression(str);
      get(str); // Consume closing parenthesis
      return number;
    }
  };

  const term = (str) => {
    let result = factor(str);
    while (
      peek(str) === OPERATORS.mul ||
      peek(str) === OPERATORS.div ||
      peek(str) === OPERATORS.mod ||
      peek(str) === OPERATORS.power
    ) {
      if (str[0] === OPERATORS.mul) {
        get(str);
        result = calculator.execute(new MultiplyCommand(result, factor(str)));
      } else if (str[0] === OPERATORS.mod) {
        get(str);
        result = calculator.execute(new ModCommand(result, factor(str)));
      } else if (str[0] === OPERATORS.power) {
        get(str);
        result = calculator.execute(new PowerCommand(result, factor(str)));
      } else if (str[0] === OPERATORS.div) {
        get(str);
        result = calculator.execute(new DivideCommand(result, factor(str)));
      }
    }
    return result;
  };

  const expression = (str) => {
    let result = term(str);
    while (peek(str) === OPERATORS.plus || peek(str) === OPERATORS.minus) {
      if (get(str) === OPERATORS.plus) {
        result = calculator.execute(new AddCommand(result, term(str)));
      } else {
        result = calculator.execute(new SubtractCommand(result, term(str)));
      }
    }
    return result;
  };

  const expressionToParse = expr.replace(/\s+/g, '').split('');
  return expression(expressionToParse);
};

const formatNumberAsString = (num, precision) => {
  return Number(num.toFixed(precision).toString()).toString();
};

export const calculateExpression = (expr) => {
  const calculatorInit = new Calculator(0);
  const result = parseExpression(expr, calculatorInit);

  return formatNumberAsString(result, 3);
};
