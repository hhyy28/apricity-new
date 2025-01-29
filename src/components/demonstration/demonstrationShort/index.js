import React from 'react';
import PropTypes from 'prop-types';
import useScrollBreakpoint from '@context/useScroll';
import { Wrapper } from './styled';
import DemonstrationComponent from '../demonstrationComponent';
import ProductCardShort from './productCardShort';

export default function Demonstration({ demonstration }) {
  const { $isTriggered, wrapperRef } = useScrollBreakpoint();

  return (
    <Wrapper ref={wrapperRef}>
      <DemonstrationComponent $isTriggered={$isTriggered} />
      <ProductCardShort
        $isTriggered={$isTriggered}
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
