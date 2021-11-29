const size = {
    mobile: '37.5em',
    
    tabPort: '56.25em',
    tabLand: '75em',
    desktop: '112.5em'
  }

  export const device = {
    mobile: `(max-width: ${size.mobile})`,
    tabPort: `(max-width: ${size.tabPort})`,
    tabLand: `(max-width: ${size.tabLand})`,
    desktopL: `(min-width: ${size.desktop})`
  };