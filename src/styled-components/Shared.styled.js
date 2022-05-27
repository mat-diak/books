import styled from "styled-components";

export const ButtonLink = styled.a`
  text-decoration: none;
  background-color: var(--orange-1);
  width: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4em;
  border-radius: 5px;
  color: var(--black);
  margin-bottom: 2em;

  &:hover {
    background-color: var(--orange-1);
  }

  svg {
    margin-top: 3.5px;
    margin-left: 0.5em;
  }
`;
