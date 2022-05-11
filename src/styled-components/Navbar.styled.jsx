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

    padding: 1em;
  }

  h1 {
  }

  input {
    width: 400px;
    border-radius: 5px;

    position: relative;
    padding: 0.3em;
  }

  ul {
    list-style-type: none;
    background-color: var(--white);
    border: 1px solid var(--black);
    width: 400px;

    margin: 0;
    padding: 0;
    position: absolute;
    border-radius: 0 0 5px 5px;
  }

  li {
    margin-top: 1px;
    padding: 0.3em;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
  }

  h3 {
    font-size: 1rem;
  }

  address {
    font-size: 0.9rem;
  }

  .details {
    order: 1;
    padding: 0.3em;
  }

  img {
    width: 50px;
    height: 50px;
  }
`;
