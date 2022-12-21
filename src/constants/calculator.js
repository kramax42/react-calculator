export const KEYPAD_OPERATORS = {
  mul: '×',
  div: '÷',
  plus: '+',
  minus: '-',
  mod: '%',
  power: '^',
  leftBracket: '(',
  rightBracket: ')',
  changeSign: '±',
  equals: '=',
  dot: '.',
};

export const KEYPAD_NUMBERS = {
  zero: '0',
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
};

// <-- - remove last char
// CE  - clean entry
// C   - clean, remove all
export const KEYPAD_REMOVERS = {
  backSpace: '<-',
  clean: 'C',
  cleanEntry: 'CE',
};

export const CALCULATOR_BUTTONS = {
  ...KEYPAD_NUMBERS,
  ...KEYPAD_OPERATORS,
  ...KEYPAD_REMOVERS,
};
