import styled from "styled-components";

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 50px;
  width: 100%;
  z-index: -1;

  img {
    width: 200px;
    height: 300px;
    object-fit: cover;
    margin-top: 3em;
  }

  .cover {
    position: absolute;
  }
`;

export default Gallery;
