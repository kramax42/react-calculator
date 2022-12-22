import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  HistoryItem,
  HistoryItems,
  HistoryTitle,
  HistoryWrapper,
} from '../styled';

class HistoryCC extends PureComponent {
  render() {
    const { history, isHistoryVisible } = this.props;

    if (!isHistoryVisible) {
      return null;
    }

    return (
      <HistoryWrapper open>
        <HistoryTitle id="historyTitle">History</HistoryTitle>
        <HistoryItems>
          {history.length ? (
            history.map(({ calculatedExpression }, index) => (
              <HistoryItem data-history-item-index={index} key={index}>
                {`${index + 1}) ${calculatedExpression}`}
              </HistoryItem>
            ))
          ) : (
            <span id="emptyHistoryText">History is empty</span>
          )}
        </HistoryItems>
      </HistoryWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    history: state.calculator.history,
    isHistoryVisible: state.calculator.isHistoryVisible,
  };
};

HistoryCC.propTypes = {
  history: PropTypes.arrayOf(PropTypes.string).isRequired,
  isHistoryVisible: PropTypes.bool.isRequired,
};

export const History = connect(mapStateToProps)(HistoryCC);
