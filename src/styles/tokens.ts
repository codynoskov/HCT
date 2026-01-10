/**
 * Design Tokens - High Contrast Tattoo Website
 * 
 * TypeScript export of design tokens for programmatic access.
 * These tokens mirror the CSS custom properties defined in tokens.css
 */

export const tokens = {
  colors: {
    primary: {
      50: '#f3fafa',
      100: '#e6f1f1',
      200: '#d3e2e2',
      300: '#b0c2c2',
      400: '#8aa5a5',
      500: '#6c8787',
      600: '#506a6a',
      700: '#354e4e',
      800: '#1b3333',
      900: '#0f2727',
      950: '#041b1b',
    },
    accent: {
      50: '#fff4f8',
      100: '#ffe5ef',
      200: '#fccee0',
      300: '#eda1c1',
      400: '#d976a3',
      500: '#b55e75',
      600: '#954059',
      700: '#75223e',
      800: '#510b26',
      900: '#3e071b',
      950: '#2b0311',
    },
    neutral: {
      0: '#ffffff',
      50: '#f8f8f8',
      100: '#eeeeee',
      200: '#dedede',
      300: '#bebebe',
      400: '#9e9e9e',
      500: '#808080',
      600: '#6f6f6f',
      900: '#262626',
      950: '#121212',
      1000: '#000000',
    },
    warning: {
      500: '#f3b200',
    },
    semantic: {
      text: '#000000',
      textInverse: '#ffffff',
      background: '#ffffff',
      border: '#000000',
      foreground: '#ffffff',
    },
  },
  typography: {
    fontFamilies: {
      stackSans: '"Stack Sans Text", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      stackSansNotch: '"Stack Sans Notch", "Stack Sans Text", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    },
    fontSizes: {
      core: {
        '600-md': '12px',
        '700-md': '16px',
        '800-sm': '20px',
        '800-md': '24px',
        '800-lg': '28px',
        '900-md': '36px',
        '1000-sm': '48px',
        '1000-md': '52px',
        '1000-lg': '60px',
      },
      text: {
        tiny: '12px',
        small: '14px',
        regular: '16px',
        medium: '18px',
      },
      heading: {
        h1: '56px',
        h2: '48px',
        h3: '36px',
        h4: '28px',
        h5: '24px',
        h6: '20px',
      },
    },
    fontWeights: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeights: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.4,
    },
  },
  spacing: {
    core: {
      '100-md': '1px',
      '300-md': '4px',
      '500-md': '8px',
      '600-md': '12px',
      '700-md': '16px',
      '800-sm': '20px',
      '800-md': '24px',
      '800-lg': '28px',
      '900-md': '36px',
      '1000-sm': '48px',
      '1000-md': '52px',
      '1000-lg': '60px',
      '1100-md': '72px',
      '1200-sm': '84px',
      '1200-md': '96px',
      '1300-md': '128px',
      '1300-lg': '144px',
      '1400-md': '192px',
      '1400-lg': '216px',
      '1500-sm': '252px',
      '1500-md': '288px',
      '1500-lg': '324px',
      '1600-sm': '364px',
      '1600-md': '416px',
      '1700-md': '640px',
      '1700-lg': '720px',
      '1800-sm': '840px',
      '1800-md': '960px',
      '1900-md': '1440px',
    },
    semantic: {
      sectionMedium: '80px',
      sectionLarge: '112px',
      pagePadding: '64px',
      containerLarge: '1280px',
    },
  },
  layout: {
    containerMaxWidth: {
      xsmall: '400px',
      small: '480px',
      large: '768px',
      xlarge: '1280px',
    },
    border: {
      widthDivider: '1px',
      widthDefault: '1px',
      radiusMedium: '0',
      radiusLarge: '0',
    },
    breakpoints: {
      mobileMax: '767px',
      tabletMin: '768px',
      tabletMax: '1023px',
      desktopMin: '1024px',
    },
  },
} as const;

export type Tokens = typeof tokens;

