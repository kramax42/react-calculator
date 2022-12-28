import { colors, darkColors, grayColors } from './colors';

const spacer = 8;

const burger = {
  size: spacer * 3,
  lineWidth: spacer * 3,
  lineHeight: spacer * 0.36,
  lineBorderRadius: spacer * 1.25,
};

export const zIndexes = {
  body: 100,
  header: 200,
  navigation: 300,
  modal: 400,
  tooltip: 500,
};

const fontSizes = {
  sm: 16,
  md: 20,
  xl: 24,
  xxl: 30,
  xxxl: 34,
};

const fontWeights = {
  thin: 400,
  normal: 500,
  bold: 600,
};

export const darkTheme = {
  background: darkColors.dark900,
  textColor: darkColors.dark600,
  textSecondaryColor: darkColors.dark700,
  numberColor: colors.red,
  operatorColor: colors.lightGray,
  hoverColor: colors.dark,
  headerBackgroundColor: colors.secondaryDarkBackgroundColor,
  headerTextColor: colors.secondaryDarkTextColor,
  buttonBackgroundColor: colors.secondaryDarkBackgroundColor,
  buttonTextColor: colors.secondaryDarkTextColor,
  borderColor: darkColors.dark500,
  numberKeypadBackground: colors.primary,
  numberKeypadColor: colors.white,
  keypadBackground: darkColors.dark800,
  keypadColor: darkColors.dark600,
  scrollbarBackground: darkColors.dark800,
  scrollbarThumbBackground: darkColors.dark700,
};

export const colorfulTheme = {
  background: colors.white,
  textColor: colors.black,
  textSecondaryColor: colors.gray,
  numberColor: colors.dark,
  hoverColor: colors.white,
  headerBackgroundColor: colors.primary,
  headerTextColor: colors.white,
  buttonBackgroundColor: colors.primary,
  buttonTextColor: colors.white,
  numberKeypadBackground: colors.primary,
  numberKeypadColor: colors.white,
  keypadBackground: grayColors.gray100,
  keypadColor: colors.dark,
  borderColor: colors.lightGray,
  scrollbarBackground: colors.lightGray,
  scrollbarThumbBackground: colors.white,
};

export const lightTheme = {
  background: colors.white,
  textColor: colors.black,
  textSecondaryColor: colors.gray,
  numberColor: colors.dark,
  hoverColor: colors.white,
  headerBackgroundColor: colors.dark,
  headerTextColor: colors.white,
  buttonBackgroundColor: colors.dark,
  buttonTextColor: colors.white,
  numberKeypadBackground: colors.primary,
  numberKeypadColor: colors.white,
  keypadBackground: grayColors.gray100,
  keypadColor: colors.dark,
  borderColor: colors.lightGray,
  scrollbarBackground: colors.lightGray,
  scrollbarThumbBackground: colors.white,
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
  headerHeight: 50,
  keypadButtonWidth: 120,
  borderWidth: 1.5,
};
