import styled from "styled-components";

export const Header = styled.h2`
  font-size: 250%;
  padding: 5rem;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  text-decoration: none;
  border: 2px solid var(--green-1);
  background-color: ${(props) =>
    props.selected ? "var(--green-1)" : "transparent"};
  border-radius: 5px;
  padding: 0.5em;

  &:hover {
    transform: scale(1.1);
    background-color: var(--green-1);
  }

  transition: all 0.2s;
`;

export const Gallery = styled.div`
  background-color: red;
`;

export const Image = styled.img`
  max-height: 300px;
`;

export const ChoiceWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 5px;
`;
