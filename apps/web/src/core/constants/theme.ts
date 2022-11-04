export const defaultTheme = {
  screens: {
    s: '567px',
    m: '992px',
  },
  colors: {
    background: 'rgba(5, 4, 7, 1)',
    primary_500: 'rgba(88, 55, 221, 1)',
    primary_400: 'rgba(120, 93, 228, 1)',
    primary_600: 'rgba(64, 41, 154, 1)',
    gray_500: 'rgba(99, 99, 106, 1)',
    gray_700: 'rgba(24, 24, 27, 1)',
    gray_800: 'rgba(17, 17, 20, 1)',
    gray_900: 'rgba(12, 12, 14, 1)',
    gray_100: 'rgba(237, 237, 237, 1)',
    gray_200: 'rgba(204, 204, 204, 1)',
    gray_400: 'rgba(159, 159, 166, 1)',
    gray_900_095: 'rgba(12, 12, 14, 0.95)',
    gray_900_085: 'rgba(12, 12, 14, 0.85)',
    gray_600: 'rgba(42, 42, 49, 1)',
    secondary_400: 'rgba(135, 255, 219, 1)',
    secondary_500: 'rgba(0, 255, 178, 1)',
    secondary_700: 'rgba(0, 154, 108, 1)',
    secondary_600: 'rgba(56, 222, 172, 1)',
  } as const,
  typography: {
    title: {
      xl: '3.5rem',
      l: '2.5rem',
      m: '1.88rem',
      s: '1.5rem',
    } as const,
    text: {
      xl: '1.25rem',
      l: '1.12rem',
      m: '1rem',
      s: '0.88rem',
      xs: '0.75rem',
    } as const,
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    } as const,
  } as const,
}

export type ColorThemeType = keyof typeof defaultTheme.colors

export type TitleFontSize = keyof typeof defaultTheme.typography.title
export type TextFontSize = keyof typeof defaultTheme.typography.text
export type WeightFont = keyof typeof defaultTheme.typography.weight
