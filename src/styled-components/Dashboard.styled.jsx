import styled from "styled-components";

const Dashboard = styled.div`
  display: flex;
  max-width: 1000px;
  min-height: 1000px;
  margin: 0 auto;
  gap: 5%;

  .selected-book {
    flex-basis: 70%;
  }

  .saved-books {
    flex-basis: 30%;
  }
`;

export default Dashboard;
