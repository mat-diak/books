import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "../config/axios";

import Navbar from "./Navbar";
import Book from "./Book";
import Suggestions from "./Suggestions";

import DashboardStyled from "../styled-components/Dashboard.styled";
import { useEffect } from "react";

const Dashboard = () => {
  const main = useSelector((state) => state.main);
  const book = main.book;
  const [suggestions, setSuggestions] = useState([]);

  const titlesApiUrl =
    "/resources/titles/?start=0&max=15&expandLevel=1&search=";

  const fetchSuggestions = async () => {
    const res = await axios.get(titlesApiUrl + "knowledge");

    setSuggestions(res.data.title);
  };

  useEffect(() => {
    fetchSuggestions();
  }, []);

  return (
    <>
      <Navbar />
      <DashboardStyled>
        {book ? (
          <Book book={book} />
        ) : (
          <Suggestions suggestions={suggestions} />
        )}
      </DashboardStyled>
    </>
  );
};

export default Dashboard;

// This request has inconsitent responses!!?
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
