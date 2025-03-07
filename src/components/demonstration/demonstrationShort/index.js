import React from 'react';
import PropTypes from 'prop-types';
import useScrollBreakpoint from '@context/useScroll';
import { Wrapper } from './styled';
import DemonstrationComponent from '../demonstrationComponent';
import ProductCardShort from './productCardShort';

export default function Demonstration({ demonstration, collection }) {
  const { $isTriggered, wrapperRef } = useScrollBreakpoint();

  return (
    <Wrapper ref={wrapperRef}>
      <DemonstrationComponent
        $isTriggered={$isTriggered}
        collection={collection}
      />
      <ProductCardShort
        $isTriggered={$isTriggered}
        productCard={demonstration.productCard}
        collection={collection}
      />
    </Wrapper>
  );
}

Demonstration.propTypes = {
  demonstration: PropTypes.shape({
    productCard: PropTypes.object.isRequired,
  }).isRequired,
  collection: PropTypes.array,
};
