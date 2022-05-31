import styled from "styled-components";

export const Wrapper = styled.nav`
  width: 100%;

  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0 auto;
  padding: 0.3em 1em;
`;

export const Heading = styled.button`
  text-decoration: none;
  color: var(--blue-3);
  background-color: transparent;
  padding: 0;
  margin: 0;
  border: none;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5%;
    opacity: 0.8;
    font-size: 22px;

    img {
      width: 38px;
      height: 38px;
    }
  }
`;
