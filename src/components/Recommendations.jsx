import Button from "./RecommendationButton";
import * as S from "../Styles";
import { useDispatch, useSelector } from "react-redux";
import { getImgUrl } from "../helpers/links";
import { selectTitle } from "../store/mainSlice";
import * as Animation from "../styled-components/Animations.styled";

const Recommendations = () => {
  const { tags, results } = useSelector((state) => state.recommendations);
  const dispatch = useDispatch();

  const matches = [...results].splice(0, 20);

  return (
    <div>
      <S.Recommendations.Header>
        What are you interested in?
      </S.Recommendations.Header>
      <S.Recommendations.ChoiceWrapper>
        {Object.keys(tags).map((tag, idx) => (
          <Button tag={tag} key={tag} idx={idx} />
        ))}
      </S.Recommendations.ChoiceWrapper>
      {matches.length > 0 && (
        <Animation.FadeIn>
          <S.Recommendations.Gallery data-testid="recommendations_gallery">
            {matches.map((book) => {
              return (
                <S.Recommendations.ImageWrapper
                  key={book.isbn}
                  onClick={() => dispatch(selectTitle(book))}
                  data-testid="book_item"
                >
                  <S.Recommendations.Image
                    src={getImgUrl(book.isbn)}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = thumbnailTemplate;
                    }}
                  />
                  <S.Recommendations.DetailsOverlay id="overlay">
                    <S.Recommendations.Heading>
                      <S.Recommendations.Title>
                        {book.title}
                      </S.Recommendations.Title>
                      <S.Recommendations.Author>
                        {book.author}
                      </S.Recommendations.Author>
                    </S.Recommendations.Heading>
                  </S.Recommendations.DetailsOverlay>
                </S.Recommendations.ImageWrapper>
              );
            })}
          </S.Recommendations.Gallery>
        </Animation.FadeIn>
      )}
    </div>
  );
};

export default Recommendations;
