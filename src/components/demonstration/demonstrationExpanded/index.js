import PropTypes from 'prop-types';
import { Wrapper } from './styled';
import React from 'react';
import { useScreen } from '@context/ScreenContext';
import ProductCardFull from '@components/demonstration/demonstrationExpanded/productCardFull';
import AtmosphereDesc from './atmosphereDesc';
import DemonstrationComponent from '../demonstrationComponent';

export default function DemonstrationExpanded({ demonstration }) {
  const { isTabletHorizontal } = useScreen();
  const { atmosphereText, productCard } = demonstration;

  return (
    <Wrapper>
      {isTabletHorizontal && <DemonstrationComponent $isTriggered={true} />}
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
