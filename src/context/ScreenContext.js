import { createContext, useContext, useEffect, useState } from 'react';
import { breakpointUpperBounds } from 'src/components/bootstrap-grid';

const { smHandset, mdHandset, lgHandset, mdTablet, lgTablet, desktop } =
  breakpointUpperBounds;

const ScreenContext = createContext();

export const useScreen = () => useContext(ScreenContext);

const ScreenProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState({
    isPhoneS: false,
    isPhoneM: false,
    isPhoneL: false,
    isTabletVertical: false,
    isTabletHorizontal: false,
    isPc: false,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      setScreenSize({
        isPhoneS: width >= smHandset,
        isPhoneM: width >= mdHandset,
        isPhoneL: width >= lgHandset,
        isTabletVertical: width >= mdTablet,
        isTabletHorizontal: width >= lgTablet,
        isPc: width >= desktop,
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ScreenContext.Provider value={screenSize}>
      {children}
    </ScreenContext.Provider>
  );
};

export default ScreenProvider;
