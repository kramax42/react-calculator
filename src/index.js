import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from '@components/ErrorBoundary';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { theme, themes } from '@styles/themes';
import { Provider, useSelector } from 'react-redux'
import { store } from '@store'
import GlobalStyles from '@styles/global-styles';
import App from './components/App';

const container = document.getElementById('root');
const root = createRoot(container);

const Root = () => {
  const { theme: currentTheme } = useSelector((state) => state.theme);
  return (
    <ErrorBoundary>
      <ThemeProvider
        theme={{
          ...theme,
          ...themes[currentTheme],
          currentTheme,
        }}>
        <BrowserRouter>
          <App />
          <GlobalStyles />
        </BrowserRouter>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
