import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faXmark,
  faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";
import ResultsList from "./ResultsList";

import {
  fetchSearchBooks,
  reset,
  close,
  open,
  updateQuery,
} from "../store/searchSlice";
import { selectTitle } from "../store/mainSlice";
import debounce from "lodash.debounce";
import * as S from "../Styles";
import FadeIn from "../styled-components/FadeIn.styled";

const SearchBar = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);

  const makeQuery = (query) => {
    dispatch(fetchSearchBooks(query));
  };

  const debouncedMakeQuery = useMemo(
    () => debounce((query) => makeQuery(query), 1000),
    []
  );

  handleChange = (e) => {
    dispatch(updateQuery(e.target.value));
    if (e.target.value.length > 0) {
      debouncedMakeQuery(e.target.value);
    } else {
      dispatch(reset());
    }
  };

  handleClick = (book) => {
    dispatch(selectTitle(book));
    dispatch(close());
  };

  return (
    <S.SearchBar.Wrapper>
      <S.SearchBar.InputWrapper>
        <S.SearchBar.InputIcon>
          {search.isLoading ? (
            <FadeIn key="1">
              <FontAwesomeIcon icon={faCircleNotch} className="fa-spin" />
            </FadeIn>
          ) : search.query ? (
            <FadeIn key="2">
              <FontAwesomeIcon
                className="clickable"
                icon={faXmark}
                onClick={() => dispatch(reset())}
              />
            </FadeIn>
          ) : (
            <FadeIn key="3">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </FadeIn>
          )}
        </S.SearchBar.InputIcon>
        <S.SearchBar.Input
          type="text"
          placeholder="Quick search"
          value={search.query}
          onChange={handleChange}
          onBlur={handleChange}
          onClick={() => dispatch(open())}
        />
      </S.SearchBar.InputWrapper>
      {search.isOpen && <ResultsList />}
    </S.SearchBar.Wrapper>
  );
};

export default SearchBar;
