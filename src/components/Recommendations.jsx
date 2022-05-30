import Button from "./Button";
import * as S from "../Styles";
import { useSelector } from "react-redux";
import { getImgUrl } from "../helpers";

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
          return (
            <S.Recommendations.ImageWrapper>
              <S.Recommendations.Image
                src={getImgUrl(book.isbn)}
                key={book.isbn}
              />
              <S.Recommendations.DetailsOverlay id="overlay">
                <S.Recommendations.Heading>
                  <h3>{book.titleweb}</h3>
                  <address>{book.authorweb}</address>
                </S.Recommendations.Heading>
              </S.Recommendations.DetailsOverlay>
            </S.Recommendations.ImageWrapper>
          );
        })}
      </S.Recommendations.Gallery>
    </div>
  );
};

export default Recommendations;
