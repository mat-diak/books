import styled from "styled-components";

export const Group = styled.ul`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  overflow-x: scroll;

  list-style-type: none;
  margin: 0;

  max-width: 1000px;
`;

export const Wrapper = styled.div``;

export const Header = styled.h3``;

export const ThumbnailContainer = styled.div``;

export const Thumbnail = styled.img`
  height: 300px;
  object-fit: cover;
`;

export const Suggestion = styled.li`
  display: flex;
  flex-direction: column;
`;
