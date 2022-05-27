import * as S from "../Styles.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmazon } from "@fortawesome/free-brands-svg-icons";
import * as Animation from "../styled-components/Animations.styled.js";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import heroTemplate from "../../public/hero-template.png";
import { getBooksByAuthor } from "../store/apiSlice.js";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const Book = ({ book }) => {
  const bookSuggestions = useSelector((state) => state.api);
  const dispatch = useDispatch();

  const getAmazonUrl = () => {
    return `https://www.amazon.co.uk/s?k=${book.isbn}`;
  };

  const getImgUrl = () => {
    return `https://reststop.randomhouse.com/resources/titles/${book.isbn}`;
  };

  useEffect(() => {
    dispatch(getBooksByAuthor(book.authorId[0]));
  }, [book]);

  return (
    <Animation.FadeIn>
      <S.Book.Wrapper>
        <S.Book.Details>
          <S.Book.Heading>
            <h2>{book.title}</h2>
            <address>By {book.author}</address>
          </S.Book.Heading>
          <S.Shared.ButtonLink href={getAmazonUrl()} target="_blank">
            <span>See on</span>
            <FontAwesomeIcon icon={faAmazon} />
          </S.Shared.ButtonLink>
          <S.Blocks.Underline color="var(--green-1)" weight="4px" />
          <S.Book.Description id="details">
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
              {book.description}
            </ReactMarkdown>
          </S.Book.Description>
        </S.Book.Details>
        <S.Book.HeroContainer>
          <S.Book.Hero
            src={getImgUrl()}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = heroTemplate;
            }}
            alt="something"
          />
        </S.Book.HeroContainer>
      </S.Book.Wrapper>
    </Animation.FadeIn>
  );
};

export default Book;
