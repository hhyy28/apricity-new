import React from 'react';
import { useScreen } from '@context/screenContext';

export const PaginationButton = ({ fillcolor }) => {
  const { isPhoneL } = useScreen();

  return isPhoneL ? (
    <svg
      width="115"
      height="31"
      viewBox="0 0 115 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="15" width="114.94" height="2" fill={fillcolor} />
      <rect width="2" height="30.99" fill={fillcolor} />
    </svg>
  ) : (
    <svg
      width="56"
      height="21"
      viewBox="0 0 56 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="55"
        height="1.30997"
        transform="matrix(-1 0 0 1 55.3563 9.17279)"
        fill={fillcolor}
      />
      <rect
        width="1.31653"
        height="20.3046"
        transform="matrix(-1 0 0 1 1.31653 0)"
        fill={fillcolor}
      />
    </svg>
  );
};
