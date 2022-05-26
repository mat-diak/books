import { useSelector } from "react-redux";
import Result from "./Result";

import * as S from "../Styles";

const ResultsList = () => {
  const search = useSelector((state) => state.search);

  return (
    <>
      <S.Result.Group>
        {!search.isLoading &&
          search.matches.map((title) => (
            <Result key={title.isbn} title={title} />
          ))}
      </S.Result.Group>
    </>
  );
};

export default ResultsList;
