import { isEmpty } from '@components/helpers/util';

const imageApiRegex = new RegExp(
  `^(https?:)?//image-api[^.]*\\.${process.env.IMAGE_DOMAIN}\\/`
);

const isImageApiUrl = (url) => !!(url && imageApiRegex.test(url));

export const getUpdatedImageSrc = (url) =>
  isImageApiUrl(url) ? url.replace(/-api/, 's') : url;

const mediaQueriesMap = {
  mobile: '(max-width: 375px)',
  tabletPortrait: '(max-width: 768px)',
  tabletLandscape: '(max-width: 1024px)',
  desktop: '(max-width: 1920px)',
};

export const getImageSizes = (receivedSizes) => {
  if (isEmpty(receivedSizes)) return null;

  const devicesList = Object.keys(mediaQueriesMap);

  const sizesList = devicesList.reduce((result, device) => {
    if (receivedSizes[device]) {
      return [...result, receivedSizes[device]];
    }
    return result;
  }, []);

  const sizesWithQuery = devicesList.reduce((result, device) => {
    if (receivedSizes[device]) {
      return [
        ...result,
        `${mediaQueriesMap[device]} ${receivedSizes[device]}px`,
      ];
    }
    return result;
  }, []);

  sizesWithQuery[sizesWithQuery.length - 1] =
    `${sizesList[sizesList.length - 1]}px`;

  return sizesWithQuery.join(', ');
};
