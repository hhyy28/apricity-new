import React from 'react';
import DemonstrationComponent from '@components/demonstrationComponent';
import ProductCardShort from '@components/productCardShort';
import { Wrapper } from './styled';
import PropTypes from 'prop-types';

export default function Demonstrations({ demonstration }) {
  return (
    <Wrapper>
      <DemonstrationComponent />
      <ProductCardShort productCard={demonstration.productCard} />
    </Wrapper>
  );
}

Demonstrations.propTypes = {
  visiblefooter: PropTypes.bool.isRequired,
  demonstration: PropTypes.shape({
    productCard: PropTypes.object.isRequired,
  }).isRequired,
};
