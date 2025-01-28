import { useEffect, useState, useRef } from 'react';

export default function useScrollBreakpoint() {
  const [$isTriggered, setIsTriggered] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (!wrapperRef.current) return;

      const { top, height, bottom } =
        wrapperRef.current.getBoundingClientRect();
      const isTriggered = top <= 50 && bottom >= height / 2;

      setIsTriggered(isTriggered);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return { $isTriggered, wrapperRef };
}
