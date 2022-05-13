import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --light-blue: rgb(206, 222, 242);
  --yellow: rgb(242, 183, 5);
  --blue: rgb(42, 112, 140);
  --pink: rgb(217, 178, 169);
  --orange: rgb(242, 159, 5);
  --white: rgb(242, 242, 242); 
  --black: rgb(13, 13, 13);

  --outside-padding: 1em;
  --main-font: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
  font-family: var(--main-font);
}
`;

export default GlobalStyles;
