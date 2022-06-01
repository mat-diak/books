import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

import Navbar from "./Navbar";
import Book from "./Book";
import Recommendations from "./Recommendations";

import * as S from "../Styles";

const Dashboard = () => {
  const main = useSelector((state) => state.main);
  const book = main.book;

  return (
    <>
      <Navbar />
      <S.Dashboard>
        {book ? <Book key={book.isbn} book={book} /> : <Recommendations />}
      </S.Dashboard>
      <ToastContainer />
    </>
  );
};

export default Dashboard;

// This request has inconsitent responses!!?
// const titlesApiUrl =
// "/resources/titles/?start=0&max=15&expandLevel=1&search=";
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
