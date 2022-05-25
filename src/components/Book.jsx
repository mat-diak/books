import * as S from "../Styles.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmazon } from "@fortawesome/free-brands-svg-icons";
import FadeIn from "../styled-components/FadeIn.styled.js";

const Book = ({ book }) => {
  const getAmazonUrl = () => {
    return `https://www.amazon.co.uk/s?k=${book.isbn}`;
  };

  const getImgUrl = () => {
    return `https://reststop.randomhouse.com/resources/titles/${book.isbn}`;
  };

  return (
    <FadeIn>
      <S.Book.Wrapper>
        <div className="selected-book">
          <S.Book.Main>
            <S.Book.Info>
              <div>
                <h2>{book.titleweb}</h2>
                <address>{book.authorweb}</address>
              </div>
              <div>
                <div>Pages: {book.pages}</div>
                <div>ISBN: {book.isbn}</div>
              </div>
              <S.Shared.ButtonLink href={getAmazonUrl()} target="_blank">
                <span>Check out at</span>
                <FontAwesomeIcon icon={faAmazon} />
              </S.Shared.ButtonLink>
            </S.Book.Info>
            <img src={getImgUrl()} alt="something" />
          </S.Book.Main>
          <S.Book.Details id="details">
            <h3>Description</h3>
            <p>{book.flapcopy}</p>
          </S.Book.Details>
        </div>
      </S.Book.Wrapper>
    </FadeIn>
  );
};

export default Book;
