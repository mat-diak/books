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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2%;

  margin-top: 3rem;
  padding: 1rem;
  max-width: 1000px;
`;

export const ImageWrapper = styled.div`
  position: relative;

  &:hover div#overlay {
    height: 100%;
    bottom: 0;
  }
`;

export const Image = styled.img`
  width: 200px;
  height: 300px;
  object-fit: contain;
  box-shadow: 5px 5px var(--green-1);
  display: block;

  margin: 1em;
  border: 2px solid var(--pink-2);
`;

export const DetailsOverlay = styled.div`
  background-color: var(--blue-2);
  color: var(--grey-1);
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  overflow: hidden;
  height: 0;
  transition: 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  &:hover {
    cursor: pointer;
  }
`;

export const Heading = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: fit-content;

  h3 {
    font-family: var(--font-1);
    font-size: 1.2rem;
    margin: 0 1em;
  }

  address {
    font-family: var(--font-2);
    font-style: normal;
    font-size: 90%;

    padding-top: 1em;

    opacity: 0.6;
    text-align: right;
    margin: 0.3em 1em;
  }
`;

export const ChoiceWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 5px;
`;
