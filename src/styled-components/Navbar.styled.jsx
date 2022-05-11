import styled from "styled-components";

export const Navbar = styled.div`
  background-color: var(--light-blue);
  position: fixed;
  width: 100%;

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
