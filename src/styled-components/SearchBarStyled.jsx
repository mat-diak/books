import styled from "styled-components";

const SearchBar = styled.div`
  input {
    width: 400px;
    border-radius: 5px;

    position: relative;
    padding: 0.3em;
    margin: auto;
    margin-left: 0.5rem;

    border: none;
    outline: none;

    background-color: transparent;
  }

  ul {
    list-style-type: none;
    background-color: var(--white);
    border: 1px solid var(--black);
    border-top: none;
    width: 437px;
    min-height: 250px;

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
    width: 100%;
  }

  li:hover {
    opacity: 0.5;
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

  /* input */

  .input-wrapper {
    border: 2px solid var(--blue);
    padding: 0.3em;
    border-radius: 5px;
    color: var(--blue);
  }
`;

export default SearchBar;
