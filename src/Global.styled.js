import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html {
    box-sizing: border-box;
}

*, *::before, *::after {
    box-sizing: inherit;
}

h1, h2, h3 {
  margin: 0;
  padding: 0;
}

body {
  display: flex;
  flex-direction: column;
  
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`;

export default GlobalStyles;
