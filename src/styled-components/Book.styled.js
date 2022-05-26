import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  max-width: 1000px;
`;

export const Main = styled.div`
  display: flex;
  gap: 2%;

  padding-top: 3rem;

  img {
    object-fit: contain;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-flow: column;
  gap: 5%;
  order: 1;
  padding-left: 3em;
`;

export const Details = styled.section`
  margin-top: 3rem;
  border-top: 2px solid var(--blue);
  border-left: 2px solid var(--blue);
  padding: 0 1em;
  border-radius: 5px;
  color: var(--black);
  text-align: justify;
`;
