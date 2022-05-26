import * as S from "../Styles";

const Result = ({ title }) => {
  const getImageUrl = (isbn) => {
    return `https://reststop.randomhouse.com/resources/titles/${isbn}`;
  };

  return (
    <S.Result.Wrapper onClick={() => handleClick(title)} key={title.isbn}>
      <S.Result.Info>
        <S.Result.Title>{title.titleweb}</S.Result.Title>
        <S.Result.Author>{title.authorweb}</S.Result.Author>
      </S.Result.Info>
      <S.Result.Thumbnail src={getImageUrl(title.isbn)} />
    </S.Result.Wrapper>
  );
};

export default Result;
