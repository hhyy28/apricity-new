import PropTypes from 'prop-types';
import { Wrapper } from './styled';
import React from 'react';
import DemonstrationComponent from '@components/demonstrationComponent';
import AtmosphereDesc from '@components/atmosphereDesc';
import { useScreen } from '@context/ScreenContext';
import ProductCardFull from '@components/productCardFull';

export default function DemonstrationExpanded({ demonstration }) {
  const { isTabletHorizontal } = useScreen();

  const { atmosphereText, productCard } = demonstration;

  return (
    <Wrapper>
      {isTabletHorizontal && <DemonstrationComponent />}
      <ProductCardFull productCard={productCard} />
      {!isTabletHorizontal && (
        <AtmosphereDesc atmosphereText={atmosphereText} />
      )}
    </Wrapper>
  );
}

DemonstrationExpanded.propTypes = {
  demonstration: PropTypes.shape({
    productCard: PropTypes.object.isRequired,
    atmosphereText: PropTypes.object.isRequired,
  }).isRequired,
};
