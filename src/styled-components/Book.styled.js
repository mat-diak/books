import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 2%;
  max-width: 1000px;

  margin-bottom: 3rem;
  margin-top: 2rem;
`;

export const CoverContainer = styled.div`
  margin-top: 2rem;
  padding: 0 2rem 2rem 2rem;

  border-radius: 0 0 15px 15px;
  border-left: 1px solid var(--pink-2);
  border-right: 1px solid var(--pink-2);
  border-bottom: 5px solid var(--pink-2);
`;

export const Hero = styled.img`
  margin: auto;
  max-height: 500px;
  object-fit: contain;

  box-shadow: 10px 10px var(--blue-2);
`;

export const Details = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-flow: column;
  gap: 5%;
  order: 1;

  padding-left: 3em;
`;

export const Heading = styled.div`
  width: fit-content;

  margin-top: 2rem;
  margin-bottom: 1.5rem;
`;

export const Author = styled.address`
  font-family: var(--font-2);
  font-style: normal;
  font-size: 90%;

  margin-top: 0.5rem;

  opacity: 0.6;
  text-align: right;
`;

export const Title = styled.h2`
  font-family: var(--font-1);
  font-size: 2rem;
`;

export const Description = styled.div`
  margin-top: 0;
  border-radius: 5px;
  color: var(--black);
  text-align: justify;
`;
