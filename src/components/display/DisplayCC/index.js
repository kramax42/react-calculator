import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { DisplayStyled, Entry, Expression } from '../styled';

class DisplayCC extends PureComponent {
  render() {
    const { expression, entry } = this.props;
    return (
      <DisplayStyled>
        <Expression id="expressionDisplay">{expression || '0'}</Expression>
        <Entry id="entryDisplay">{entry || '0'}</Entry>
      </DisplayStyled>
    );
  }
}

DisplayCC.propTypes = {
  entry: PropTypes.string.isRequired,
  expression: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    entry: state.calculator.entry,
    expression: state.calculator.expression,
  };
};

export const Display = connect(mapStateToProps)(DisplayCC);
