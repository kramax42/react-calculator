import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from '@components/ErrorBoundary';
import { store } from '@store';
import GlobalStyles from '@styles/global-styles';
import { themes } from '@styles/themes';
import { ThemeProvider } from 'styled-components';

import App from './components/App';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container);

function Root() {
  const { theme: currentTheme } = useSelector((state) => state.theme);
  return (
    <ErrorBoundary>
      <ThemeProvider
        theme={{
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
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
