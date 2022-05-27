import styled from "styled-components";

export const Group = styled.ul`
  list-style-type: none;
  width: 441px;
  max-height: 300px;
  overflow-y: auto;

  margin: 0;
  padding: 0;
  position: absolute;

  border-radius: 5px;
  border: 1px solid var(--white);

  z-index: 1;
  margin-top: 0px;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

export const Wrapper = styled.li`
  margin-top: 1px;
  padding: 0.3em;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  background-color: white;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    background-color: var(--white);
    border: 1px solid var(--light-blue);
    transition: all 0.2s;
  }
`;

export const Thumbnail = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  order: 1;
  padding-left: 0.3em;
`;

export const Title = styled.h3`
  font-size: 1rem;
  font-weight: 400;
`;

export const Author = styled.address`
  font-size: 0.8rem;
  opacity: 0.6;
  font-style: normal;
`;
