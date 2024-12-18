import PropTypes from 'prop-types'; 
import { Wrapper } from './styled';
import React from 'react';
import DemonstrationComponent from '@components/demonstrationComponent';
import AtmosphereDesc from '@components/atmosphereDesc';
import { useScreen } from '@context/ScreenContext';
import ProductCardFull from '@components/productCardFull';

export default function DemonstrationExpanded({ demonstration }) {
  const visiblefooter = true;
  const { isTabletHorizontal } = useScreen();

  return (
    <Wrapper>
      { isTabletHorizontal && <DemonstrationComponent/>}
      <ProductCardFull
        visiblefooter={visiblefooter}
        productCard={demonstration.productCard}
      />
       { !isTabletHorizontal && <AtmosphereDesc/> }
    </Wrapper>
  );
}

DemonstrationExpanded.propTypes = {
  demonstration: PropTypes.shape({
    productCard: PropTypes.object.isRequired, 
  }).isRequired,
};
