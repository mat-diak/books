import * as S from "../Styles.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmazon } from "@fortawesome/free-brands-svg-icons";
import * as Animation from "../styled-components/Animations.styled.js";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import heroTemplate from "../../public/hero-template.png";
import { getAmazonUrl, getImgUrl } from "../helpers/links";

const Book = ({ book }) => {
  return (
    <Animation.FadeIn>
      <S.Book.Wrapper>
        <S.Book.Details>
          <S.Book.Heading>
            <S.Book.Title>{book.title}</S.Book.Title>
            <S.Book.Author>By {book.author}</S.Book.Author>
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
            alt={`${book.title} book cover`}
          />
        </S.Book.CoverContainer>
      </S.Book.Wrapper>
    </Animation.FadeIn>
  );
};

export default Book;
