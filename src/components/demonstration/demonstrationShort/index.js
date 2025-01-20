import React from 'react';
import PropTypes from 'prop-types';
import useScrollBreakpoint from '@context/UseScroll';
import { Wrapper } from './styled';
import DemonstrationComponent from '../demonstrationComponent';
import ProductCardShort from './productCardShort';

export default function Demonstration({ demonstration }) {
  const { isAtScreenTop, wrapperRef } = useScrollBreakpoint();

  return (
    <Wrapper ref={wrapperRef}>
      <DemonstrationComponent isAtScreenTop={isAtScreenTop} />
      <ProductCardShort
        isAtScreenTop={isAtScreenTop}
        productCard={demonstration.productCard}
      />
    </Wrapper>
  );
}

Demonstration.propTypes = {
  demonstration: PropTypes.shape({
    productCard: PropTypes.object.isRequired,
  }).isRequired,
};
