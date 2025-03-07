import React from 'react';
import PropTypes from 'prop-types';
import memoizeOne from 'memoize-one';
import getDeviceType from 'helpers/get-device-type';

import { getUpdatedImageSrc } from '../helpers';
import { isFiniteNumber } from '@components/helpers/util';

const defaultDeviceTypeMap = [
  {
    name: 'mobile',
    mediaQuery: 'max-width: 375px',
  },
  {
    name: 'tabletPortrait',
    mediaQuery: 'max-width: 768px',
  },
  {
    name: 'tabletLandscape',
    mediaQuery: 'max-width: 1024px',
  },
];

const getResizedImageUrl = (imageUrl, size) => {
  if (!imageUrl) return '';

  const url = new URL(imageUrl);

  if (isFiniteNumber(size)) {
    url.searchParams.set('w', size);
    return url.toString();
  }

  const { width, height } = size;

  if (width) url.searchParams.set('w', width);
  if (height) url.searchParams.set('h', height);

  return url.toString();
};

const getSources = (resizeOptions, deviceTypeMap, imageUrl) =>
  resizeOptions
    ? deviceTypeMap.map(({ name, mediaQuery }) =>
        resizeOptions[name] ? (
          <source
            key={name}
            media={`(${mediaQuery})`}
            srcSet={getResizedImageUrl(imageUrl, resizeOptions[name])}
          />
        ) : null
      )
    : null;

const getDefaultImageUrl = (resizeOptions, deviceTypeMap, imageUrl) => {
  if (!resizeOptions) return imageUrl;

  const deviceType = getDeviceType(deviceTypeMap);

  return resizeOptions[deviceType]
    ? getResizedImageUrl(imageUrl, resizeOptions[deviceType])
    : imageUrl;
};

const getSourcesMemoized = memoizeOne(getSources);

const Image = ({ src, alt, resizeOptions, deviceTypeMap, className }) => {
  const updatedSrc = getUpdatedImageSrc(src);

  return (
    <picture className={className}>
      {getSourcesMemoized(resizeOptions, deviceTypeMap, updatedSrc)}
      <img
        src={getDefaultImageUrl(resizeOptions, deviceTypeMap, updatedSrc)}
        alt={alt}
      />
    </picture>
  );
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  resizeOptions: PropTypes.shape({
    mobile: PropTypes.number,
    tabletPortrait: PropTypes.number,
    tabletLandscape: PropTypes.number,
    desktop: PropTypes.number,
  }),
  deviceTypeMap: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      mediaQuery: PropTypes.string,
    })
  ),
  className: PropTypes.string,
};

Image.defaultProps = {
  deviceTypeMap: defaultDeviceTypeMap,
};

export default Image;
