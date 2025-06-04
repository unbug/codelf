import React from 'react';
import { Icon, Dropdown } from 'semantic-ui-react';
import { useTheme, THEMES } from '../hooks/useTheme';

const ThemeToggle = () => {
  const { theme, setTheme, isDark, isAuto } = useTheme();

  const themeOptions = [
    {
      key: THEMES.LIGHT,
      text: '☀️ Light',
      value: THEMES.LIGHT,
      icon: 'sun',
      description: 'Always use light theme'
    },
    {
      key: THEMES.DARK,
      text: '🌙 Dark', 
      value: THEMES.DARK,
      icon: 'moon',
      description: 'Always use dark theme'
    },
    {
      key: THEMES.AUTO,
      text: '⚪ Auto',
      value: THEMES.AUTO,
      icon: 'circle outline',
      description: 'Follow system preference'
    }
  ];

  const getCurrentIcon = () => {
    if (isAuto) return 'circle outline';
    return isDark ? 'moon' : 'sun';
  };

  const getCurrentLabel = () => {
    if (isAuto) return 'Auto';
    return isDark ? 'Dark' : 'Light';
  };

  const getTooltipText = () => {
    if (isDark) {
      return `Current: ${getCurrentLabel()} theme. Click to turn off dark mode, or hold to see all options`;
    } else {
      return `Current: ${getCurrentLabel()} theme. Click to change theme`;
    }
  };

  // Simple toggle for easier dark mode control
  const handleQuickToggle = () => {
    if (isDark) {
      // If in dark mode (manual or auto), switch to light
      setTheme(THEMES.LIGHT);
    } else {
      // If in light mode, switch to dark
      setTheme(THEMES.DARK);
    }
  };

  return (
    <div className="theme-toggle-wrapper">
      <Dropdown
        trigger={
          <div 
            className="theme-toggle-btn animated fadeInDown" 
            title={getTooltipText()}
            role="button"
            tabIndex={0}
            aria-label="Theme selector"
            onDoubleClick={handleQuickToggle}
          >
            <Icon name={getCurrentIcon()} />
            {/* Add a small indicator when in dark mode to make it clearer */}
            {isDark && (
              <span 
                style={{
                  position: 'absolute',
                  top: '-2px',
                  right: '-2px',
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: 'var(--accent-primary)',
                  fontSize: '0.6em'
                }}
                title="Dark mode active - double-click to turn off"
              />
            )}
          </div>
        }
        options={themeOptions}
        value={theme}
        onChange={(e, { value }) => setTheme(value)}
        direction="left"
        pointing="top right"
        className="theme-dropdown"
        aria-label="Select theme"
      />
    </div>
  );
};

export default ThemeToggle;