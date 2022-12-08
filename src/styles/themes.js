const spacer = 8;

export const breakPoints = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

export const devices = {
    mobileS: `(min-width: ${breakPoints.mobileS})`,
    mobileM: `(min-width: ${breakPoints.mobileM})`,
    mobileL: `(min-width: ${breakPoints.mobileL})`,
    tablet: `(min-width: ${breakPoints.tablet})`,
    laptop: `(min-width: ${breakPoints.laptop})`,
    laptopL: `(min-width: ${breakPoints.laptopL})`,
    desktop: `(min-width: ${breakPoints.desktop})`,
    desktopL: `(min-width: ${breakPoints.desktop})`
};

const fontSizes = {
    sm: 16,
    md: 20,
    xl: 24,
    xxl: 30,
    xxxl: 34
}

const fontWeights = {
    thin: 400,
    normal: 500,
    bold: 600
};

const grayColors = {
    gray100: '#f8f9fa',
    gray200: '#e9ecef',
    gray300: '#ddd',
    gray400: '#ced4da',
    gray500: '#adb5bd',
    gray600: '#868e96',
    gray700: '#495057',
    gray800: '#343a40',
    gray900: '#212529',
}

const colors = {
    black: '#000000',
    dark: grayColors.gray900,
    white: '#ffffff',
    error: 'tomato',
    red: '#CD2305',
    primary: '#4582ec',
    secondary: grayColors.gray500,
    secondaryLight: grayColors.gray300,
    darkGray: grayColors.gray800,
    gray: grayColors.gray600,
    lightGray: grayColors.gray300,
};

const darkColors = {
    dark500: '#444c56',
    dark600: '#ADBAC7',
    dark700: '#768390',
    dark800: '#22272e',
    dark900: '#171b20'
}

export const darkTheme = {
    background: darkColors.dark900,
    textColor: darkColors.dark600,
    textSecondaryColor: darkColors.dark700,
    numberColor: colors.red,
    operatorColor: colors.lightGray,
    hoverColor: colors.dark,
    headerBackgroundColor: darkColors.dark800,
    headerTextColor: darkColors.dark600,
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
    dark: darkTheme
};

export const theme = {
    colors,
    fontSizes,
    fontWeights,
    spacer,
    headerHeight: 50,
    keypadButtonWidth: 105,
    borderWidth: 1.5,
};