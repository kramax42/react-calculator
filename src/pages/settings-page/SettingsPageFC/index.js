import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@components/button/ButtonFC';
import { themes } from '@constants/themes';
import { MainLayout } from '@layouts/main-layout/MainLayoutFC';
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

function SettingsPage() {
  const { theme: currentTheme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handleChangeTheme = (event) => {
    const newTheme = event.target.value;
    dispatch(setTheme({ theme: newTheme }));
  };

  const handleClearHistory = () => {
    dispatch(clearHistory());
  };

  return (
    <MainLayout>
      <SettingsWrapper>
        <Title>Settings</Title>
        <Column>
          <SelectLabel htmlFor="themeSelect">Theme:</SelectLabel>
          <Select
            id="themeSelect"
            value={currentTheme}
            onChange={handleChangeTheme}>
            {themes.map((theme) => (
              <Option key={theme} value={theme}>
                {capitalize(theme)}
              </Option>
            ))}
          </Select>
          <Button id="clearHistory" onClick={handleClearHistory}>
            Clear History
          </Button>
        </Column>
      </SettingsWrapper>
    </MainLayout>
  );
}

export default SettingsPage;
