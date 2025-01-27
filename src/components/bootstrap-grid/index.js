import React from 'react';
import PropTypes from 'prop-types';
import { BaseCSS, GridThemeProvider, media } from 'styled-bootstrap-grid';
import gridTheme, { breakpointUpperBounds } from './grid-theme';

export { gridTheme, breakpointUpperBounds, media };

const CSSGrid = ({ children, override = null }) => (
  <>
    <BaseCSS />
    <GridThemeProvider gridTheme={override?.gridTheme || gridTheme}>
      {children}
    </GridThemeProvider>
  </>
);

CSSGrid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  override: PropTypes.shape({
    gridTheme: PropTypes.object,
  }),
};

export default CSSGrid;
