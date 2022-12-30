import { createGlobalStyle } from 'styled-components';

import { scrollbar } from './components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    scrollbar-color: ${({ theme }) => theme.scrollbar.backgroundColor};
    scrollbar-width: thin;

    ::-webkit-scrollbar {
      background: ${({ theme }) => theme.scrollbar.backgroundColor};
      border: ${scrollbar.borderWidth}px solid ${({ theme }) =>
  theme.bodyBackgroundColor};
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.scrollbar.thumbBackgroundColor};
      border: ${scrollbar.thumbBorderWidth}px solid transparent;
      background-clip: content-box;
    }

    ::-webkit-scrollbar-corner {
      background: ${({ theme }) => theme.bodyBackgroundColor};
    }
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  body {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;
