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
import Suggestions from "./Suggestions.jsx";
import { getAmazonUrl, getImgUrl } from "../helpers.js";

const Book = ({ book }) => {
  const bookSuggestions = useSelector((state) => state.api);
  const dispatch = useDispatch();

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
          <S.Shared.ButtonLink href={getAmazonUrl(book.isbn)} target="_blank">
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
        <S.Book.CoverContainer>
          <S.Book.Hero
            src={getImgUrl(book.isbn)}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = heroTemplate;
            }}
            alt="something"
          />
        </S.Book.CoverContainer>
      </S.Book.Wrapper>
      <Suggestions items={bookSuggestions.results} />
    </Animation.FadeIn>
  );
};

export default Book;
