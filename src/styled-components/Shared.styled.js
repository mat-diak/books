import styled from "styled-components";

export const ButtonLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;
  background-color: var(--orange-1);
  color: var(--black);

  width: 140px;
  padding: 0.4em;
  border-radius: 5px;
  margin-bottom: 2em;

  &:hover {
    background-color: var(--orange-1);
  }

  svg {
    margin-top: 3.5px;
    margin-left: 0.5em;
  }
`;
