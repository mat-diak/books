import styled from "styled-components";

export const Wrapper = styled.li`
  margin-top: 1px;
  padding: 0.3em;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  opacity: 0.7;
  background-color: white;
  border-radius: 5px;

  &:hover {
    opacity: 1;
    cursor: pointer;
    transform: scale(1.03);
  }
`;

export const Thumbnail = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
`;

export const Info = styled.div`
  order: 1;
  padding: 0.3em;
`;

export const Title = styled.h3`
  font-size: 1rem;
`;

export const Author = styled.address`
  font-size: 0.9rem;
`;
