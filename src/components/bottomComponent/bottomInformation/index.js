import React from 'react';
import PropTypes from 'prop-types';
import { 
  AtmoContainer, 
  AtmoCopy, 
  AtmoTitle, 
  DiscoverContainer, 
  DiscoverCopy, 
  DiscoverTitle, 
  Wrapper 
} from './styled';

export default function BottomInfo({ bottomInfo }) {
  const {
    discoverTitle,
    discoverCopy,
    atmoTitle,
    atmoCopy
  } = bottomInfo;

  return (
    <Wrapper>
      <DiscoverContainer>
        <DiscoverTitle>{discoverTitle}</DiscoverTitle>
        <DiscoverCopy>{discoverCopy}</DiscoverCopy>
      </DiscoverContainer>
      <AtmoContainer>
        <AtmoTitle>{atmoTitle}</AtmoTitle>
        <AtmoCopy>{atmoCopy}</AtmoCopy>
      </AtmoContainer>
    </Wrapper>
  );
}

BottomInfo.propTypes = {
  bottomInfo: PropTypes.shape({
    discoverTitle: PropTypes.string.isRequired,
    discoverCopy: PropTypes.string.isRequired,
    atmoTitle: PropTypes.string.isRequired,
    atmoCopy: PropTypes.string.isRequired,
  }).isRequired,
};
