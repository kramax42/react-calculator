import React from 'react';
import { useSelector } from 'react-redux';
import { Expression, Entry, DisplayStyled } from '../styled';
import PropTypes from 'prop-types';

const DisplayFC = () => {
    const entry = useSelector((state) => state.calculator.entry);
    const expression = useSelector((state) => state.calculator.expression);

    return (
        <DisplayStyled>
            <Expression id='expressionDisplay'>
                {expression || "0"}
            </Expression>
            <Entry id='entryDisplay'>
                {entry || "0"}
            </Entry>
        </DisplayStyled>
    );
}

DisplayFC.defaultProps = {
    entry: "0",
    expression: "0",
}

DisplayFC.propTypes = {
    entry: PropTypes.string,
    expression: PropTypes.string,
}

export const Display = DisplayFC;