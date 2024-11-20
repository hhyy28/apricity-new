export const breakpointUpperBounds = {
  sm: -1,
  smHandset: 320,
  mdHandset: 360,
  lgHandset: 568,
  mdTablet: 768,
  lgTablet: 1024,
  desktop: 1440,
};

const gridTheme = {
  gridColumns: 12,
  breakpoints: {
    xxl: breakpointUpperBounds?.desktop,
    xl: breakpointUpperBounds?.lgTablet,
    lg: breakpointUpperBounds?.mdTablet,
    md: breakpointUpperBounds?.lgHandset,
    sm: breakpointUpperBounds?.mdHandset,
    xs: 0,
  },
  container: {
    maxWidth: {
      xxl: breakpointUpperBounds?.lgDesktop,
      xl: breakpointUpperBounds?.lgDesktop,
      lg: breakpointUpperBounds?.mdTablet,
      md: breakpointUpperBounds?.lgHandset,
      sm: breakpointUpperBounds?.mdHandset,
    },
  },
};

export default gridTheme;
