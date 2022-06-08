import { useSelector } from "react-redux";
import Result from "./Result";

import * as S from "../Styles";

const ResultsList = ({ handleClick }) => {
  const search = useSelector((state) => state.search);

  return (
    <>
      <S.Result.SearchResults>
        {!search.isLoading &&
          search.matches.map((title) => (
            <Result handleClick={handleClick} key={title.isbn} title={title} />
          ))}
      </S.Result.SearchResults>
    </>
  );
};

export default ResultsList;
