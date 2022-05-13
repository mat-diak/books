import {
  Book as BookStyled,
  BookMain,
  BookDescription,
  BookInfo,
  ButtonLink,
} from "../styled-components/Book.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmazon } from "@fortawesome/free-brands-svg-icons";

const Book = ({ book }) => {
  const getAmazonUrl = () => {
    return `https://www.amazon.co.uk/s?k=${book.isbn}`;
  };

  const getImgUrl = () => {
    return `https://reststop.randomhouse.com/resources/titles/${book.isbn}`;
  };

  return (
    <BookStyled>
      <div className="selected-book">
        <BookMain>
          <BookInfo>
            <div>
              <h2>{book.titleweb}</h2>
              <address>{book.authorweb}</address>
            </div>
            <div>
              <div>Pages: {book.pages}</div>
              <div>ISBN: {book.isbn}</div>
            </div>
            <ButtonLink href={getAmazonUrl()} target="_blank">
              <span>Check out at</span>
              <FontAwesomeIcon icon={faAmazon} />
            </ButtonLink>
          </BookInfo>
          <img src={getImgUrl()} alt="something" />
        </BookMain>
        <BookDescription id="description">
          <h3>Description</h3>
          <p>{book.flapcopy}</p>
        </BookDescription>
      </div>
    </BookStyled>
  );
};

export default Book;
