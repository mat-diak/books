import styled from "styled-components";

export const ButtonLink = styled.a`
  text-decoration: none;
  background-color: var(--yellow);
  width: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4em;
  border-radius: 5px;
  color: var(--black);

  &:hover {
    background-color: var(--orange);
  }

  span {
    margin-right: 0.4em;
  }
`;

export const Clickable = styled.div`
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;
