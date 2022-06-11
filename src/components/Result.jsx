import * as S from "../Styles";
import { selectTitle } from "../store/mainSlice";
import { close } from "../store/searchSlice";
import { useDispatch } from "react-redux";
import { getImgUrl } from "../helpers/links";

const Result = ({ title }) => {
  const dispatch = useDispatch();

  const handleClick = (book) => {
    dispatch(selectTitle(book));
    dispatch(close());
  };

  return (
    <S.Result.Wrapper
      onClick={() => handleClick(title)}
      key={title.isbn}
      data-testid="search-result"
    >
      <S.Result.Info>
        <S.Result.Title data-cy="search-result-title">
          {title.title}
        </S.Result.Title>
        <S.Result.Author data-cy="search-result-author">
          {title.author}
        </S.Result.Author>
      </S.Result.Info>
      <S.Result.Thumbnail
        src={getImgUrl(title.isbn)}
        alt={title.title + "book cover image"}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/thumbnail-template.png";
        }}
      />
    </S.Result.Wrapper>
  );
};

export default Result;
