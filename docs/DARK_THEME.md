# Dark Theme Implementation for Codelf

## Overview

This document describes the implementation of a VS Code-inspired dark theme for the Codelf project. The implementation includes a complete theme system with automatic system theme detection, manual theme switching, and comprehensive styling for all UI components.

## Features

### Theme System
- **Auto Detection**: Automatically detects user's system theme preference (`prefers-color-scheme`)
- **Manual Override**: Users can manually switch between light, dark, and auto modes
- **Persistence**: Theme preference is saved in localStorage and persists across sessions
- **Smooth Transitions**: All theme switches include smooth CSS transitions

### Theme Options
1. **Light Theme**: Clean, bright interface (default)
2. **Dark Theme**: VS Code-inspired dark interface with proper contrast
3. **Auto Theme**: Follows system preference and responds to system theme changes

## Implementation Details

### File Structure

```
styles/
├── _constants.scss              # VS Code color constants
├── _theme-variables.scss        # CSS custom properties for theming
├── _semantic-ui-overrides.scss  # Dark theme overrides for Semantic UI
└── app.scss                     # Main stylesheet importing all theme files

src/
├── hooks/
│   └── useTheme.js             # React theme management hook
├── components/
│   └── ThemeToggle.js          # Theme toggle dropdown component
└── App.js                      # Updated with ThemeProvider
```

### Color Scheme

The dark theme uses VS Code's color palette:

#### Background Colors
- **Primary Background**: `#1e1e1e` (editor background)
- **Secondary Background**: `#252526` (sidebar background) 
- **Input Background**: `#3c3c3c` (input fields)
- **Hover Background**: `#2a2d2e` (hover states)

#### Text Colors
- **Primary Text**: `#cccccc` (main text)
- **Secondary Text**: `#969696` (muted text)
- **Active Text**: `#ffffff` (highlighted text)

#### Accent Colors
- **Primary Accent**: `#007acc` (links, buttons)
- **Focus Accent**: `#0e639c` (focus states)
- **Selection**: `#264f78` (selections)

### CSS Variables System

The theme system uses CSS custom properties that change based on the `body.dark` class:

```scss
:root {
  --bg-primary: #ffffff;     /* Light theme */
  --text-primary: #373a3c;
  // ... other variables
}

body.dark {
  --bg-primary: #1e1e1e;     /* Dark theme */
  --text-primary: #cccccc;
  // ... other variables
}
```

### React Theme Hook

The `useTheme` hook provides:

```javascript
const {
  theme,        // Current theme preference ('light'|'dark'|'auto')
  actualTheme,  // Resolved theme ('light'|'dark')
  setTheme,     // Function to set theme preference
  toggleTheme,  // Function to toggle between light/dark
  isDark,       // Boolean indicating if dark theme is active
  isAuto        // Boolean indicating if auto mode is enabled
} = useTheme();
```

### Theme Toggle Component

The `ThemeToggle` component provides a dropdown with three options:
- ☀️ Light
- 🌙 Dark  
- ⚪ Auto

## Usage

### For Developers

#### Using the Theme Hook
```javascript
import { useTheme } from '../hooks/useTheme';

function MyComponent() {
  const { isDark, toggleTheme } = useTheme();
  
  return (
    <div style={{ background: isDark ? '#1e1e1e' : '#ffffff' }}>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
```

#### Using CSS Variables
```scss
.my-component {
  background: var(--bg-primary);
  color: var(--text-primary);
  border: 1px solid var(--border-primary);
  
  &:hover {
    background: var(--bg-hover);
  }
}
```

### Extending the Theme

#### Adding New CSS Variables
1. Add the variable to both light and dark sections in `_theme-variables.scss`
2. Use the variable in your component styles

#### Adding New Colors
1. Define the color in `_constants.scss`
2. Add it to the CSS variables system
3. Use it in your components

#### Custom Component Theming
For custom components, follow this pattern:

```scss
.my-custom-component {
  background: var(--bg-primary);
  color: var(--text-primary);
  
  .my-element {
    border-color: var(--border-primary);
    
    &:hover {
      background: var(--bg-hover);
    }
  }
}
```

## Code Syntax Highlighting

The dark theme includes VS Code-inspired syntax highlighting for code blocks:

- **Strings**: `#ce9178` (light orange)
- **Keywords**: `#569cd6` (light blue)
- **Comments**: `#6a9955` (green)
- **Types**: `#4ec9b0` (cyan)
- **Functions**: `#dcdcaa` (yellow)

## Testing

To test the theme implementation:

1. **Manual Testing**:
   - Click the theme toggle in the top-right corner
   - Test all three modes (Light, Dark, Auto)
   - Verify smooth transitions
   - Check all UI components in both themes

2. **System Theme Testing**:
   - Set theme to "Auto"
   - Change your OS theme preference
   - Verify the app follows system changes

3. **Persistence Testing**:
   - Change theme preference
   - Refresh the page
   - Verify theme preference is maintained

## Browser Support

The theme system supports:
- Modern browsers with CSS custom properties support
- `prefers-color-scheme` media query support
- localStorage for theme persistence

## Future Enhancements

Potential improvements for the theme system:
1. Additional theme variants (high contrast, custom themes)
2. Theme editor for custom color schemes  
3. Keyboard shortcuts for theme switching
4. More granular component-level theming options
5. Theme preview without applying changes

## Migration Notes

### From Legacy Dark Theme
The old dark theme was a simple `body.dark` class with hardcoded colors. The new system:
- Maintains backward compatibility
- Provides more comprehensive coverage
- Uses CSS variables for easier maintenance
- Includes proper VS Code color scheme

### Breaking Changes
None - the new system is fully backward compatible with existing dark theme usage.