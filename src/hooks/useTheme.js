import React, { createContext, useContext, useEffect, useState } from 'react';

// Theme types
export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
  AUTO: 'auto'
};

const ThemeContext = createContext();

// Theme detection utilities
const getSystemTheme = () => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? THEMES.DARK : THEMES.LIGHT;
  }
  return THEMES.LIGHT;
};

const getStoredTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      const stored = localStorage.getItem('codelf-theme');
      return stored && Object.values(THEMES).includes(stored) ? stored : THEMES.LIGHT;
    } catch (error) {
      console.warn('Failed to read theme from localStorage:', error);
      return THEMES.LIGHT;
    }
  }
  return THEMES.LIGHT;
};

const setStoredTheme = (theme) => {
  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      localStorage.setItem('codelf-theme', theme);
    } catch (error) {
      console.warn('Failed to save theme to localStorage:', error);
    }
  }
};

const applyTheme = (theme) => {
  if (typeof document !== 'undefined') {
    const isDark = theme === THEMES.DARK;
    document.body.classList.toggle('dark', isDark);
  }
};

export function ThemeProvider({ children }) {
  const [themePreference, setThemePreference] = useState(THEMES.LIGHT);
  const [actualTheme, setActualTheme] = useState(THEMES.LIGHT);

  useEffect(() => {
    // Initialize theme from storage
    const storedTheme = getStoredTheme();
    setThemePreference(storedTheme);
    
    const systemTheme = getSystemTheme();
    const currentTheme = storedTheme === THEMES.AUTO ? systemTheme : storedTheme;
    setActualTheme(currentTheme);
    applyTheme(currentTheme);
  }, []);

  useEffect(() => {
    // Listen for system theme changes
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      const handleChange = (e) => {
        if (themePreference === THEMES.AUTO) {
          const newTheme = e.matches ? THEMES.DARK : THEMES.LIGHT;
          setActualTheme(newTheme);
          applyTheme(newTheme);
        }
      };
      
      // Support both modern and legacy event listener methods
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
      } else if (mediaQuery.addListener) {
        // Fallback for older browsers
        mediaQuery.addListener(handleChange);
        return () => mediaQuery.removeListener(handleChange);
      }
    }
  }, [themePreference]);

  const setTheme = (newTheme) => {
    if (!Object.values(THEMES).includes(newTheme)) {
      console.warn('Invalid theme:', newTheme);
      return;
    }
    
    setThemePreference(newTheme);
    setStoredTheme(newTheme);
    
    const systemTheme = getSystemTheme();
    const actualNewTheme = newTheme === THEMES.AUTO ? systemTheme : newTheme;
    setActualTheme(actualNewTheme);
    applyTheme(actualNewTheme);
  };

  const toggleTheme = () => {
    const currentTheme = themePreference === THEMES.AUTO ? getSystemTheme() : themePreference;
    const newTheme = currentTheme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
    setTheme(newTheme);
  };

  const value = {
    theme: themePreference,
    actualTheme,
    setTheme,
    toggleTheme,
    isDark: actualTheme === THEMES.DARK,
    isAuto: themePreference === THEMES.AUTO
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}