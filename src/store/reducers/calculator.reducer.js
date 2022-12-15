import { createSlice, current } from '@reduxjs/toolkit';
import { calculatorHandler } from '@utils/calculator-handler'

const initialState = {
    history: [],
    isHistoryVisible: true,
    expression: '',
    entry: '',
};

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        addToCalculatorHistory: (state, action) => {
            state.history.push(action.payload);
        },
        clearHistory: (state) => {
            state.history = [];
            state.expression = '';
            state.entry = '';
        },
        toggleHistoryVisibility: (state) => {
            state.isHistoryVisible = !state.isHistoryVisible;
        },
        updateCalculatorValues: (state, action) => {
            const {
                newHistoryItems,
                entry: newEntry,
                expression: newExpression
            } = calculatorHandler({
                entry: current(state).entry,
                expression: current(state).expression,
                keypadValue: action.payload.keypadValue
            });
            state.history.push(...newHistoryItems);
            state.entry = newEntry;
            state.expression = newExpression;
        }
    },
})

export const {
    addToCalculatorHistory,
    clearHistory,
    toggleHistoryVisibility,
    updateCalculatorValues
} = calculatorSlice.actions;

export default calculatorSlice.reducer;