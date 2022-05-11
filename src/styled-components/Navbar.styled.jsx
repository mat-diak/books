import styled from "styled-components";

export const Navbar = styled.nav`
  background-color: var(--yellow);

  nav {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-content: center;
    max-width: 1000px;
    max-height: 50px;
    margin: 0 auto;

    padding: var(--outside-padding);
  }

  h1 {
  }
`;
