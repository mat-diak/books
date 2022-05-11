import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "./Navbar";
import SavedBooks from "./SavedBooks";
import Book from "./Book";

import DashboardStyled from "../styled-components/Dashboard.styled";

import * as manyWorks from "../../scrap/manyWorks.json";
import * as singleTitle from "../../scrap/singleTitle.json";

const Dashboard = () => {
  const [saved, setSaved] = useState(manyWorks.work);

  return (
    <>
      <Navbar />
      <DashboardStyled>
        <Book book={singleTitle} />
        <SavedBooks savedBooks={saved} />
      </DashboardStyled>
    </>
  );
};

export default Dashboard;
