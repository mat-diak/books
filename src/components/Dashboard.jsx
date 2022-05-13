import { useState } from "react";

import Navbar from "./Navbar";
import Book from "./Book";

import DashboardStyled from "../styled-components/Dashboard.styled";

import * as manyWorks from "../../scrap/manyWorks.json";

const Dashboard = () => {
  const [saved, setSaved] = useState(manyWorks.work);

  // This request has inconsitent responses!!
  // const testingFetchTitle = async () => {
  //   let url = "https://reststop.randomhouse.com/resources/titles/9780593289136";

  //   const config = {
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //   };

  //   const res = await axios.get(url, config);

  //   console.log("Response from dashboard: ", res);
  // };

  // useEffect(() => {
  //   testingFetchTitle();
  // }, []);

  return (
    <>
      <Navbar />
      <DashboardStyled>
        <Book />
      </DashboardStyled>
    </>
  );
};

export default Dashboard;
