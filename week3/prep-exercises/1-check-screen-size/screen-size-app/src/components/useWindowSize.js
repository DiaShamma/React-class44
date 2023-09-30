import { useState, useEffect, useDebugValue } from 'react';

function useWindowSize(minWidth, maxWidth) {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [screenType, setScreenType] = useState('medium');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setSize({ width, height: window.innerHeight });

      if (width > 1000) setScreenType('big');
      else if (width < 700) setScreenType('small');
      else setScreenType('medium');
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isWithinRange = size.width >= minWidth && size.width <= maxWidth;
  useDebugValue(isWithinRange ? 'Within range' : 'Out of range');

  return { ...size, screenType, isWithinRange };
}

export default useWindowSize;
