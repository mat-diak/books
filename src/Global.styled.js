import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html {
    box-sizing: border-box;
}

*, *::before, *::after {
    box-sizing: inherit;
}

body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`;

export default GlobalStyles;
