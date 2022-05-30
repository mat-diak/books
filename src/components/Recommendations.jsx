import Button from "./Button";
import * as S from "../Styles";
import { useSelector } from "react-redux";

const Recommendations = () => {
  const { tags, results } = useSelector((state) => state.recommendations);

  console.log("Recommendations", results);

  return (
    <div>
      <S.Recommendations.Header>
        What are you interested in?
      </S.Recommendations.Header>
      <S.Recommendations.ChoiceWrapper>
        {tags.map((tag) => (
          <Button tag={tag} key={tag} />
        ))}
      </S.Recommendations.ChoiceWrapper>
      <S.Recommendations.Gallery>
        {results.map((book) => {
          return <div>{book.titleweb}</div>;
        })}
      </S.Recommendations.Gallery>
    </div>
  );
};

export default Recommendations;
