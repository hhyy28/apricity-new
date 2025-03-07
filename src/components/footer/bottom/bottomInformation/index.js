import React from 'react';
import PropTypes from 'prop-types';
import {
  AtmoContainer,
  AtmoCopy,
  AtmoTitle,
  DiscoverContainer,
  DiscoverCopy,
  DiscoverTitle,
  Wrapper,
} from './styled';

export default function BottomInfo({ bottomInfo, collection }) {
  const { discoverTitle, atmoTitle } = bottomInfo;
  const firstCollection = collection?.[0];
  const { discoverInfo, atmosphere } = firstCollection;

  return (
    <Wrapper>
      <DiscoverContainer>
        <DiscoverTitle>{discoverTitle}</DiscoverTitle>
        <DiscoverCopy>{discoverInfo}</DiscoverCopy>
      </DiscoverContainer>
      <AtmoContainer>
        <AtmoTitle>{atmoTitle}</AtmoTitle>
        <AtmoCopy>{atmosphere}</AtmoCopy>
      </AtmoContainer>
    </Wrapper>
  );
}

BottomInfo.propTypes = {
  bottomInfo: PropTypes.shape({
    discoverTitle: PropTypes.string.isRequired,
    atmoTitle: PropTypes.string.isRequired,
  }).isRequired,
  collection: PropTypes.array,
};
