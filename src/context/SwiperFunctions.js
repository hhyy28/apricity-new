import { useCallback } from "react";

export const useSwiperControls = (swiperInstance) => {
  const slidePrev = useCallback(() => {
    swiperInstance?.slidePrev?.();
  }, [swiperInstance]);

  const slideNext = useCallback(() => {
    swiperInstance?.slideNext?.();
  }, [swiperInstance]);

  const slideToFirst = useCallback(() => {
    swiperInstance?.slideTo?.(0);
  }, [swiperInstance]);

  const slideToLast = useCallback(() => {
    if (swiperInstance?.slideTo && swiperInstance.slides) {
      swiperInstance.slideTo(swiperInstance.slides.length - 1);
    }
  }, [swiperInstance]);

  return { slidePrev, slideNext, slideToFirst, slideToLast };
};
