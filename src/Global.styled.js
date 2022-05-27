import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --light-blue: rgb(206, 222, 242);
  --yellow: rgb(242, 183, 5);
  --blue: rgb(42, 112, 140);
  --dark-blue: rgb(11, 64, 85);
  --pink: rgb(217, 178, 169);
  --orange: rgb(242, 159, 5);
  --white: rgb(242, 242, 242);
  --light-grey: rgb(235, 235, 235);
  --grey: rgb(186, 186, 186);
  --dark-grey: rgb(139, 139, 139);
  --light-black: rgb(58, 58, 58);
  --black: rgb(13, 13, 13);

  --outside-padding: 1em;
  --font-1: "Pangolin", sans-serif;
  --font-2: sans-serif;
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
  font-family: var(--font-1);
}

body {
  display: flex;
  flex-direction: column;
  
  padding: 0;
  margin: 0;
  font-family: var(--font-2);
}

@keyframes animate-fade {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
`;

export default GlobalStyles;
