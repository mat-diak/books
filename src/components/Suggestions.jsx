import * as S from "../Styles";
import { getImgUrl } from "../helpers";
import * as S from "../Styles";

const Suggestions = ({ items }) => {
  console.log(items);

  return (
    <S.Suggestions.Wrapper>
      <S.Suggestions.Header>More by author</S.Suggestions.Header>
      <S.Suggestions.Group>
        {items.map((book) => {
          return (
            <S.Suggestions.Suggestion>
              <S.Suggestions.ThumbnailContainer>
                <S.Suggestions.Thumbnail src={getImgUrl(book.isbn)} />
              </S.Suggestions.ThumbnailContainer>
            </S.Suggestions.Suggestion>
          );
        })}
      </S.Suggestions.Group>
    </S.Suggestions.Wrapper>
  );
};

export default Suggestions;
