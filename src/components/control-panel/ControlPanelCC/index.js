import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Button } from '@components/button/ButtonCC';
import {
  clearHistory,
  toggleHistoryVisibility,
} from '@store/reducers/calculator.reducer';
import PropTypes from 'prop-types';

import { ControlPanelStyled, Title } from '../styled';

class ControlPanelCC extends PureComponent {
  render() {
    const {
      handleToggleHistoryVisibility,
      handleClearHistory,
      isHistoryVisible,
    } = this.props;

    return (
      <>
        <Title>Control Panel</Title>
        <ControlPanelStyled>
          <Button
            id="toggleHistoryVisibility"
            onClick={handleToggleHistoryVisibility}>
            {isHistoryVisible ? 'Hide History' : 'Show History'}
          </Button>
          <Button id="clearHistory" onClick={handleClearHistory}>
            Clear History
          </Button>
        </ControlPanelStyled>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isHistoryVisible: state.calculator.isHistoryVisible,
  };
};

const mapDispatchToProps = (dispatch) => {
  const handleClearHistory = () => {
    dispatch(clearHistory());
  };

  const handleToggleHistoryVisibility = () => {
    dispatch(toggleHistoryVisibility());
  };

  return {
    handleClearHistory,
    handleToggleHistoryVisibility,
  };
};

ControlPanelCC.propTypes = {
  handleClearHistory: PropTypes.func.isRequired,
  handleToggleHistoryVisibility: PropTypes.func.isRequired,
  isHistoryVisible: PropTypes.bool.isRequired,
};

export const ControlPanel = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ControlPanelCC);
