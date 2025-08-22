import { createTheme } from '@mui/material/styles';
import { FONTS, FONT_WEIGHTS } from '../constants/fonts';

export const theme = createTheme({
  typography: {
    // Override the default fontFamily
    fontFamily: FONTS.POPPINS.REGULAR,

    // Define custom typography variants
    h1: {
      fontFamily: FONTS.PROMPT.MEDIUM,
      fontWeight: FONT_WEIGHTS.PROMPT.MEDIUM,
    },
    h2: {
      fontFamily: FONTS.PROMPT.MEDIUM,
      fontWeight: FONT_WEIGHTS.PROMPT.MEDIUM,
    },
    h3: {
      fontFamily: FONTS.PROMPT.MEDIUM,
      fontWeight: FONT_WEIGHTS.PROMPT.MEDIUM,
    },
    h4: {
      fontFamily: FONTS.POPPINS.SEMIBOLD,
      fontWeight: FONT_WEIGHTS.POPPINS.SEMIBOLD,
    },
    h5: {
      fontFamily: FONTS.POPPINS.SEMIBOLD,
      fontWeight: FONT_WEIGHTS.POPPINS.SEMIBOLD,
    },
    h6: {
      fontFamily: FONTS.POPPINS.SEMIBOLD,
      fontWeight: FONT_WEIGHTS.POPPINS.SEMIBOLD,
    },
    subtitle1: {
      fontFamily: FONTS.POPPINS.REGULAR,
      fontWeight: FONT_WEIGHTS.POPPINS.REGULAR,
    },
    subtitle2: {
      fontFamily: FONTS.POPPINS.REGULAR,
      fontWeight: FONT_WEIGHTS.POPPINS.REGULAR,
    },
    body1: {
      fontFamily: FONTS.POPPINS.REGULAR,
      fontWeight: FONT_WEIGHTS.POPPINS.REGULAR,
    },
    body2: {
      fontFamily: FONTS.POPPINS.LIGHT,
      fontWeight: FONT_WEIGHTS.POPPINS.LIGHT,
    },
    button: {
      fontFamily: FONTS.POPPINS.SEMIBOLD,
      fontWeight: FONT_WEIGHTS.POPPINS.SEMIBOLD,
      textTransform: 'none',
    },
    caption: {
      fontFamily: FONTS.POPPINS.LIGHT,
      fontWeight: FONT_WEIGHTS.POPPINS.LIGHT,
    },
    overline: {
      fontFamily: FONTS.POPPINS.LIGHT,
      fontWeight: FONT_WEIGHTS.POPPINS.LIGHT,
    },
  },

  // Override component defaults to ensure Poppins is used
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: FONTS.POPPINS.REGULAR,
          fontWeight: FONT_WEIGHTS.POPPINS.REGULAR,
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        sx: {
          fontFamily: FONTS.POPPINS.REGULAR,
        },
      },
    },
  },
});
