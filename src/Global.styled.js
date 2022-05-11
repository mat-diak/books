import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --yellow: #F2CB05;
  --orange: #F29F05;
  --white: #F2F2F2;
  --brown: #A64F03;
  --black: #0D0D0D;

  --outside-padding: 1em;
}

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
  background-color: var(--white);
  
  display: flex;
  flex-direction: column;
  
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`;

export default GlobalStyles;
