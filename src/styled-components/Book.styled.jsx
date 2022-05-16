import styled from "styled-components";

export const Book = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

export const BookMain = styled.div`
  display: flex;
  gap: 2%;

  padding-top: 3rem;

  .img {
    order: 0;
  }
`;

export const BookInfo = styled.div`
  display: flex;
  flex-flow: column wrap;
  gap: 5%;
  order: 1;
  padding-left: 3em;
`;

export const BookDescription = styled.section`
  margin-top: 3rem;
  border-top: 2px solid var(--blue);
  border-left: 2px solid var(--blue);
  padding: 0.5rem;
  border-radius: 5px;
  color: var(--black);

  h2 {
  }
`;

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
