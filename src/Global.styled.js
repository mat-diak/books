import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300&family=Roboto:wght@300&display=swap');

:root {
  --light-blue: rgb(206, 222, 242);
  --yellow: rgb(242, 183, 5);
  --blue: rgb(42, 112, 140);
  --dark-blue: rgb(11, 64, 85);
  --pink: rgb(217, 178, 169);
  --orange: rgb(242, 159, 5);
  --white: rgb(242, 242, 242); 
  --black: rgb(13, 13, 13);

  --outside-padding: 1em;
  --font-1: 'Roboto', sans-serif;
  --font-2: 'Nunito', sans-serif;
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
  font-family: var(--font-2);
}

body {
  display: flex;
  flex-direction: column;
  
  padding: 0;
  margin: 0;
  font-family: var(--font-1);
}

@keyframes animate-fade {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
`;

export default GlobalStyles;
