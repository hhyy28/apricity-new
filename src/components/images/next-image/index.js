import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { getUpdatedImageSrc, getImageSizes } from '../helpers';

const getResizerUrl = ({ src, width, quality }) => {
  const url = new URL(src, process.env.APP_DOMAIN);

  if (width) url.searchParams.set('w', width);
  if (quality) url.searchParams.set('q', quality);

  return url.toString();
};

const NextImage = ({ src, sizes, alt, ...rest }) => {
  const updatedSrc = getUpdatedImageSrc(src);
  const sizesValue = getImageSizes(sizes);

  if (!updatedSrc || !src) {
    return null;
  }

  return (
    <Image
      loader={getResizerUrl}
      src={updatedSrc}
      sizes={sizesValue}
      alt={alt || src}
      {...rest}
      style={{ objectFit: 'cover' }}
    />
  );
};

NextImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  sizes: PropTypes.shape({
    mobile: PropTypes.number,
    tabletPortrait: PropTypes.number,
    tabletLandscape: PropTypes.number,
    desktop: PropTypes.number,
  }),
};

export default NextImage;
