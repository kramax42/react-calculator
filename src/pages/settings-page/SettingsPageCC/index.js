import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Button } from '@components/button/ButtonCC';
import { themes } from '@constants/themes';
import { MainLayout } from '@layouts/main-layout/MainLayoutCC';
import { clearHistory } from '@store/reducers/calculator.reducer';
import { setTheme } from '@store/reducers/theme.reducer';
import { capitalize } from '@utils/capitalize';

import {
  Column,
  Option,
  Select,
  SelectLabel,
  SettingsWrapper,
  Title,
} from '../styled';

class SettingsPage extends Component {
  handleChangeTheme = (event) => {
    const newTheme = event.target.value;
    const { dispatch } = this.props;
    dispatch(setTheme({ theme: newTheme }));
  };

  handleClearHistory = () => {
    const { dispatch } = this.props;
    dispatch(clearHistory());
  };

  render() {
    const { currentTheme } = this.props;
    return (
      <MainLayout>
        <SettingsWrapper>
          <Title>Settings</Title>
          <Column>
            <SelectLabel htmlFor="themeSelect">Theme:</SelectLabel>
            <Select
              id="themeSelect"
              value={currentTheme}
              onChange={this.handleChangeTheme}>
              {themes.map((theme) => (
                <Option key={theme} value={theme}>
                  {capitalize(theme)}
                </Option>
              ))}
            </Select>
            <Button id="clearHistory" onClick={this.handleClearHistory}>
              Clear History
            </Button>
          </Column>
        </SettingsWrapper>
      </MainLayout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentTheme: state.theme.theme,
  };
};

SettingsPage.propTypes = {
  currentTheme: PropTypes.oneOf(themes).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(SettingsPage);
