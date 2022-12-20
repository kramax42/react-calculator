export const expressions = [
    {
        commands: ['.', '1', '+', '2', '×', '3', '='],
        expression: '0.1+2×3',
        equals: '6.1'
    },
    {
        commands: ['(', '1', '+', '2', ')', '×', '.', '3', '='],
        expression: '(1+2)×0.3',
        equals: '0.9'
    },
    {
        commands: ['1', '÷', '3', '='],
        expression: '1÷3',
        equals: '0.333'
    },
    {
        commands: ['5', '^', '3', '='],
        expression: '5^3',
        equals: '125'
    },
    {
        commands: ['8', '%', '6', '='],
        expression: '8%6',
        equals: '2'
    },
    {
        commands: ['.', '0', '0', '2', '÷', '1', '0', '='],
        expression: '0.002÷10',
        equals: '0' // because precision is 3 symbols after dot
    },
    {
        commands: ['(', '1', '+', '2', ')', '-', '(', '3', '+', '2', ')', '='],
        expression: '(1+2)-(3+2)',
        equals: '-2'
    },
    {
        commands: ['(', '.', '2', ')', '='],
        expression: '(0.2)',
        equals: '0.2'
    },
    // Temporary decision for corner cases.
    // Corner case 1
    {
        commands: ['1', '÷', '0', '='],
        expression: '1÷0',
        equals: '0'
    },
];

export const expressionsSequence = [
    {
        commands: ['6', '0', '0', '0', '^', '5', '0', '0', '0', '='],
        expression: '6000^5000',
        equals: '∞'
    },
    {
        commands: ['3', '+', '5', '='],
        expression: '3+5',
        equals: '8'
    },
]