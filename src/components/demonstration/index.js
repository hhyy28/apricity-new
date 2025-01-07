import React from 'react';
import DemonstrationComponent from '@components/demonstrationComponent';
import ProductCardShort from '@components/productCardShort';
import { Wrapper } from './styled';
import useScrollBreakpoint from '@context/UseScroll';
import PropTypes from 'prop-types';

export default function Demonstrations({ demonstration }) {
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

Demonstrations.propTypes = {
  demonstration: PropTypes.shape({
    productCard: PropTypes.object.isRequired,
  }).isRequired,
};
