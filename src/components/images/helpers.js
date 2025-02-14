import { isEmpty } from "@components/helpers/util";

const imageApiRegex = new RegExp(`^(https?:)?//image-api[^.]*\\.${process.env.IMAGE_DOMAIN}\\/`);

function isImageApiUrl(url) {
  return !!(url && imageApiRegex.test(url));
}

export function getUpdatedImageSrc(url) {
  if (isImageApiUrl(url)) {
    return url.replace(/-api/, 's');
  }

  return url;
}

const mediaQueriesMap = {
  mobile: '(max-width: 375px)',
  tabletPortrait: '(max-width: 768px)',
  tabletLandscape: '(max-width: 1024px)',
  desktop: '(max-width: 1920px)'
};

export function getImageSizes(receivedSizes) {
  if (isEmpty(receivedSizes)) return null;

  const devicesList = Object.keys(mediaQueriesMap);

  const sizesList = devicesList
    .reduce((result, device) => {
      if (receivedSizes[device]) {
        return [
          ...result,
          receivedSizes[device]
        ];
      }

      return result;
    }, []);

  const sizesWithQuery = devicesList
    .reduce((result, device) => {
      if (receivedSizes[device]) {
        return [
          ...result,
          `${mediaQueriesMap[device]} ${receivedSizes[device]}px`
        ];
      }

      return result;
    }, []);

  // replacing last without media query
  sizesWithQuery[sizesWithQuery.length - 1] = `${sizesList[sizesList.length - 1]}px`;

  return sizesWithQuery.join(', ');
}
