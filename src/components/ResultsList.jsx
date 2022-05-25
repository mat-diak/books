import { useSelector } from "react-redux";
import Result from "./Result";
import FadeIn from "../styled-components/FadeIn.styled";
import Spinner from "../components/Spinner";

import * as S from "../Styles";

const ResultsList = () => {
  const search = useSelector((state) => state.search);

  return (
    <FadeIn>
      <S.ResultsList>
        {search.isLoading ? (
          <Spinner />
        ) : (
          search.matches.map((title) => (
            <Result key={title.isbn} title={title} />
          ))
        )}
      </S.ResultsList>
    </FadeIn>
  );
};

export default ResultsList;
