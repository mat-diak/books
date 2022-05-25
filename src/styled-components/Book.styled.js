import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

export const Main = styled.div`
  display: flex;
  gap: 2%;

  padding-top: 3rem;

  .img {
    order: 0;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-flow: column wrap;
  gap: 5%;
  order: 1;
  padding-left: 3em;
`;

export const Details = styled.section`
  margin-top: 3rem;
  border-top: 2px solid var(--blue);
  border-left: 2px solid var(--blue);
  padding: 0.5rem;
  border-radius: 5px;
  color: var(--black);
`;
