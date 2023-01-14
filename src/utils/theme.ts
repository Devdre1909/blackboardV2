import colors from './colors';
import {typography} from './typography';

export const defaultTheme = {
  primaryColor: colors.primary.BASE,
  accentColor: colors.accent.BASE,
  textColor: colors.neutral[500],
  whiteColor: colors.neutral[100],
  blackColor: colors.neutral[600],
  disabledColor: colors.neutral[400],
  successColor: colors.success[500],
  warningColor: colors.warning[500],
  errorColor: colors.error[500],

  borderRadius: '0px',

  // Typography
  fontFamily: typography.font,
  typeScale: typography.typeScale,

  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px'
  },
};
