import styled from "styled-components";

export const Navbar = styled.nav`
  width: 100%;

  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-end;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0.3em;

  a {
    text-decoration: none;
    color: var(--blue);
    display: block;

    &:hover {
      opacity: 0.5;
    }
  }

  h1 {
    display: flex;
    gap: 5%;
    font-size: 1.5em;
    opacity: 0.8;

    svg {
      color: var(--dark-blue);
      opacity: 0.8;
    }
  }
`;
