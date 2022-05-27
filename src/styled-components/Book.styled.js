import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  max-width: 1000px;
  gap: 2%;

  /* ----- */
  /* background-color: red; */
`;

export const HeroContainer = styled.div`
  flex-basis: 50%;
  border-left: 1px solid var(--pink-2);
  border-right: 1px solid var(--pink-2);
  border-bottom: 5px solid var(--pink-2);

  margin-top: 2rem;
  padding: 0 2rem 2rem 2rem;

  border-radius: 0 0 15px 15px;
`;

export const Hero = styled.img`
  margin: auto;
  display: block;
  max-height: 500px;
  object-fit: contain;

  box-shadow: 10px 10px var(--blue-2);

  /* ------ */
  /* background-color: green; */
`;

export const Details = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-flow: column;
  gap: 5%;
  order: 1;
  padding-left: 3em;

  /* ---- */
  /* background-color: blue; */
`;

export const Heading = styled.div`
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  width: fit-content;

  h2 {
    font-family: var(--font-1);
    font-size: 2rem;
  }

  address {
    font-family: var(--font-2);
    font-style: normal;
    font-size: 90%;

    margin-top: 0.5rem;

    opacity: 0.6;
    text-align: right;
  }
`;

export const Description = styled.p`
  margin-top: 0;
  border-radius: 5px;
  color: var(--black);
  text-align: justify;
`;
