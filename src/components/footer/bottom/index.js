import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styled';
import BottomSwiper from './bottomSwiper';
import BottomInfo from './bottomInformation';

export default function BottomComponent({ bottomData }) {
  const { bottomSwiper, bottomInfo } = bottomData;

  return (
    <Wrapper>
      <BottomSwiper bottomSwiper={bottomSwiper} />
      <BottomInfo bottomInfo={bottomInfo} />
    </Wrapper>
  );
}

BottomComponent.propTypes = {
  bottomData: PropTypes.shape({
    bottomSwiper: PropTypes.object.isRequired,
    bottomInfo: PropTypes.object.isRequired,
  }).isRequired,
};
