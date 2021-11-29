import { createGlobalStyle } from 'styled-components';
import { device } from './styles/breakpoints.styled';

export const GlobalStyle = createGlobalStyle`

*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html {
    scroll-behavior: smooth;
    // This defines what 1rem is
    font-size: 62.5%; //1 rem = 10px; 10px/16px = 62.5%


@media ${device.tabLand} {
    font-size: 56.25%
}

@media ${device.tabPort} {
    font-size: 50%
}


@media ${device.mobile} {
    font-size: 48%
}


@media ${device.desktopL} {
    font-size: 75%
}



}

body {
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
    overflow-x: hidden;
  
    &::-webkit-scrollbar {
    width: .8em;
    border-radius: 5rem;

  }
   
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);

  }
   
  &::-webkit-scrollbar-thumb {
    background-color: #C0C0C0;
    outline: none;
    border-radius: 5rem;
  }
  
}

`