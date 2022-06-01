import styled from "styled-components";

export const Header = styled.h2`
  display: flex;
  justify-content: center;

  font-size: 250%;
  padding: 5rem;
`;

export const Button = styled.button`
  position: relative;
  background-color: ${(props) =>
    props.selected ? "var(--green-1)" : "transparent"};
  text-decoration: none;

  border: 2px solid var(--green-1);
  border-radius: 5px;
  padding: 0.5em;

  &:hover {
    transform: scale(1.1);
    background-color: var(--green-1);
    cursor: pointer;
  }

  &:active {
    background-color: var(--green-2);
  }

  transition: all 0.2s;
`;

export const ButtonText = styled.div`
  color: ${(props) => (props.isLoading ? "var(--green-1)" : "inherit")};
`;

export const LoadingOverlay = styled.div`
  position: absolute;
  margin: auto;
  width: 100%;
  color: var(--blue-3);
  margin-left: -7px;
`;

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1em;

  max-width: 1000px;
  margin-top: 3rem;
  padding: 1rem 1rem 0 1rem;
`;

export const ImageWrapper = styled.div`
  position: relative;

  &:hover div#overlay {
    height: 100%;
    bottom: 0;
  }
`;

export const Image = styled.img`
  display: block;
  width: 200px;
  height: 300px;
  object-fit: contain;

  box-shadow: 5px 5px var(--green-1);
  margin: 1em;
  border: 2px solid var(--pink-2);
`;

export const DetailsOverlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;

  background-color: var(--blue-2);
  color: var(--grey-1);

  bottom: 100%;
  left: 0;
  right: 0;
  overflow: hidden;
  height: 0;

  &:hover {
    cursor: pointer;
  }

  transition: 0.5s ease;
`;

export const Heading = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 100%;
`;

export const Title = styled.h3`
  font-family: var(--font-1);
  font-size: 1.2rem;
  margin: 0 1em;
`;

export const Author = styled.address`
  font-family: var(--font-2);
  font-style: normal;
  font-size: 90%;

  padding-top: 1em;

  opacity: 0.6;
  text-align: right;
  margin: 0.3em 1em;
`;

export const ChoiceWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 5px;
`;
