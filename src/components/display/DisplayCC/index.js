import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Entry, Expression, DisplayStyled } from '../styled';
import { connect } from 'react-redux';

class DisplayCC extends Component {
    render() {
        const { expression, entry } = this.props;
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
}

DisplayCC.defaultProps = {
    entry: "0",
    expression: "0",
}

DisplayCC.propTypes = {
    entry: PropTypes.string,
    expression: PropTypes.string,
}

const mapStateToProps = state => {
    return {
        entry: state.calculator.entry,
        expression: state.calculator.expression,
    }
}

export const Display = connect(mapStateToProps)(DisplayCC);