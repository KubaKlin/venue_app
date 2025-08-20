// Google Fonts configuration
export const FONTS = {
  // Prompt font (Medium - 500)
  PROMPT: {
    MEDIUM: '"Prompt", sans-serif',
  },
  
  // Poppins font (Light - 300, Regular - 400, Semibold - 600)
  POPPINS: {
    LIGHT: '"Poppins", sans-serif',
    REGULAR: '"Poppins", sans-serif',
    SEMIBOLD: '"Poppins", sans-serif',
  },
};

// Font weights
export const FONT_WEIGHTS = {
  PROMPT: {
    MEDIUM: 500,
  },
  POPPINS: {
    LIGHT: 300,
    REGULAR: 400,
    SEMIBOLD: 600,
  },
};

export const FONT_STYLES = {
  PROMPT_MEDIUM: {
    fontFamily: FONTS.PROMPT.MEDIUM,
    fontWeight: FONT_WEIGHTS.PROMPT.MEDIUM,
  },

  POPPINS_LIGHT: {
    fontFamily: FONTS.POPPINS.LIGHT,
    fontWeight: FONT_WEIGHTS.POPPINS.LIGHT,
  },

  POPPINS_REGULAR: {
    fontFamily: FONTS.POPPINS.REGULAR,
    fontWeight: FONT_WEIGHTS.POPPINS.REGULAR,
  },

  POPPINS_SEMIBOLD: {
    fontFamily: FONTS.POPPINS.SEMIBOLD,
    fontWeight: FONT_WEIGHTS.POPPINS.SEMIBOLD,
  },
};
