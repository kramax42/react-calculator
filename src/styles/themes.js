import { colors, darkColors, grayColors } from './colors';
import {
  borderWidth,
  burger,
  fontSizes,
  fontWeights,
  headerHeight,
  keypadButtonWidth,
  spacer,
} from './sizes';
import { zIndexes } from './z-indexes';

const defaultTheme = {
  bodyBackgroundColor: darkColors.dark900,
  operatorColor: colors.lightGray,
  hoverColor: colors.dark,
  borderColor: darkColors.dark500,
  text: {
    color: darkColors.dark600,
    secondaryColor: darkColors.dark700,
  },
  header: {
    backgroundColor: colors.secondaryDarkBackgroundColor,
    textColor: colors.secondaryDarkTextColor,
  },
  button: {
    backgroundColor: colors.secondaryDarkBackgroundColor,
    textColor: colors.secondaryDarkTextColor,
  },
  keypad: {
    backgroundColor: darkColors.dark800,
    textColor: darkColors.dark600,
  },
  scrollbar: {
    backgroundColor: darkColors.dark800,
    thumbBackgroundColor: darkColors.dark700,
  },
};

export const darkTheme = {
  ...defaultTheme,
};

export const colorfulTheme = {
  ...defaultTheme,
  bodyBackgroundColor: colors.white,
  operatorColor: colors.lightGray,
  hoverColor: colors.lightGray,
  borderColor: colors.lightGray,
  text: {
    color: colors.black,
    secondaryColor: colors.gray,
  },
  header: {
    backgroundColor: colors.primary,
    textColor: colors.white,
  },
  button: {
    backgroundColor: colors.primary,
    textColor: colors.white,
  },
  keypad: {
    backgroundColor: grayColors.gray100,
    textColor: colors.dark,
  },
  scrollbar: {
    backgroundColor: colors.lightGray,
    thumbBackgroundColor: colors.white,
  },
};

export const lightTheme = {
  ...defaultTheme,
  bodyBackgroundColor: colors.white,
  operatorColor: colors.lightGray,
  hoverColor: colors.lightGray,
  borderColor: colors.lightGray,
  text: {
    color: colors.black,
    secondaryColor: colors.gray,
  },
  header: {
    backgroundColor: colors.dark,
    textColor: colors.white,
  },
  button: {
    backgroundColor: colors.dark,
    textColor: colors.white,
  },
  keypad: {
    backgroundColor: grayColors.gray100,
    textColor: colors.dark,
  },
  scrollbar: {
    backgroundColor: colors.lightGray,
    thumbBackgroundColor: colors.white,
  },
};

export const themes = {
  light: lightTheme,
  colorful: colorfulTheme,
  dark: darkTheme,
};

export const theme = {
  colors,
  fontSizes,
  fontWeights,
  spacer,
  zIndexes,
  burger,
  headerHeight,
  keypadButtonWidth,
  borderWidth,
};
