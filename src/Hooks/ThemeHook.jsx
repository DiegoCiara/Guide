import React, { useState, useEffect } from 'react';

export function useDarkModeDetection() {
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const updateDarkMode = (event) => {
      setIsDarkMode(event.matches);
    };

    mediaQuery.addEventListener('change', updateDarkMode);
    return () => {
      mediaQuery.removeEventListener('change', updateDarkMode);
    };
  }, []);

  return isDarkMode;
}
