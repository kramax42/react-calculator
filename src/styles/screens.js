import { css } from 'styled-components';

export const SCREEN_SIZES = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopM: 1140,
  laptopL: 1440,
  desktop: 2560,
};

export const above = Object.keys(SCREEN_SIZES).reduce((acc, key) => {
  acc[key] = (...args) => css`
    @media (min-width: ${SCREEN_SIZES[key]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const below = Object.keys(SCREEN_SIZES).reduce((acc, key) => {
  acc[key] = (...args) => css`
    @media (max-width: ${SCREEN_SIZES[key]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
