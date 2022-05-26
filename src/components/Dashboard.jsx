import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "../config/axios";

import Navbar from "./Navbar";
import Book from "./Book";

import * as S from "../Styles";
import { useEffect } from "react";

const Dashboard = () => {
  const main = useSelector((state) => state.main);
  const book = main.book;

  const titlesApiUrl =
    "/resources/titles/?start=0&max=15&expandLevel=1&search=";

  return (
    <>
      <Navbar />
      <S.Dashboard>
        {book ? <Book key={book.isbn} book={book} /> : null}
      </S.Dashboard>
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
