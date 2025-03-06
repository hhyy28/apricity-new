import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useScreen } from '@context/screenContext';
import { OptionMenu, Option, Wrapper } from './styled';
import SwiperPagination from './swiper-pagination';
import SwiperSlider from './swiper-slider';
import { useTheme } from '@context/themeContext';

export default function BottomSwiper({ bottomSwiper, collection }) {
  const swiperRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const { backgroundColor } = useTheme();
  const { refineOption, sortOption, collectionLabel } = bottomSwiper;

  const { isPhoneL } = useScreen(null);

  useEffect(() => {
    if (swiperRef.current) {
      setSwiperInstance(swiperRef.current);
    }
  }, [swiperRef.current]);

  return (
    <Wrapper style={{ background: backgroundColor }}>
      {isPhoneL && (
        <OptionMenu>
          <Option>{refineOption}</Option>
          <Option>{sortOption}</Option>
        </OptionMenu>
      )}
      <SwiperSlider
        swiperRef={swiperRef}
        collection={collection}
        collectionLabel={collectionLabel}
      />
      {!isPhoneL && (
        <OptionMenu>
          <Option>{refineOption}</Option>
          <Option>{sortOption}</Option>
        </OptionMenu>
      )}
      {swiperInstance && <SwiperPagination swiperInstance={swiperInstance} />}
    </Wrapper>
  );
}

BottomSwiper.propTypes = {
  bottomSwiper: PropTypes.shape({
    refineOption: PropTypes.string.isRequired,
    sortOption: PropTypes.string.isRequired,
    collectionLabel: PropTypes.string.isRequired,
  }).isRequired,
  collection: PropTypes.array.isRequired,
};
