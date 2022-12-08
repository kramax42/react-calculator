import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    scrollbar-color: ${({ theme }) => theme.scrollbarBackground};
    scrollbar-width: thin;
    &::-webkit-scrollbar {
      background: ${({ theme }) => theme.scrollbarBackground};
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.scrollbarThumbBackground};
      border: ${({ theme }) => theme.spacer * .5}px solid transparent;
      background-clip: content-box;
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
