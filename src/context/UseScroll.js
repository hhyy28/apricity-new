import { useEffect, useState, useRef } from 'react';

export default function useScrollBreakpoint() {
  const [isAtScreenTop, setIsAtScreenTop] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function onScroll() {
      if (!wrapperRef.current || isAtScreenTop) return;

      const { top } = wrapperRef.current.getBoundingClientRect();
      if (top <= 0) {
        setIsAtScreenTop(true);
        console.log(isAtScreenTop);
        
      }
    }

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [isAtScreenTop]);

  return { isAtScreenTop, wrapperRef };
}
