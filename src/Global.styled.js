import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --outside-padding: 1em;
  --font-1: "Karla", sans-serif;
  --font-2: "Lato", sans-serif;

  --blue-1: #DCEAFF;
  --blue-2: #5576D9;
  --blue-3: #1D52F2;

  --green-1: #BDF2ED;
  
  --orange-1: #F2DB94;
  
  --pink-2: #F2EAE4;
  
  --grey-1: #EEEEEE;
  --grey-2: #8D8D8D;
  --grey-3: #737373;

  --black: #040404;

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
  font-weight: 900;
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
