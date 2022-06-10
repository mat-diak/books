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
import debounce from "lodash.debounce";
import * as S from "../Styles";
import * as Animation from "../styled-components/Animations.styled";
import OutsideClickHandler from "react-outside-click-handler/build/OutsideClickHandler";

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

  const handleChange = (e) => {
    dispatch(updateQuery(e.target.value));
    if (e.target.value.length > 0) {
      debouncedMakeQuery(e.target.value);
    } else {
      dispatch(reset());
    }
  };

  return (
    <S.SearchBar.Wrapper>
      <S.SearchBar.InputWrapper>
        <S.SearchBar.InputIcon>
          {search.isLoading ? (
            <Animation.FadeIn key="1">
              <FontAwesomeIcon
                icon={faCircleNotch}
                className="fa-spin"
                data-testid="search-loading"
              />
            </Animation.FadeIn>
          ) : search.query ? (
            <Animation.FadeIn key="2">
              <FontAwesomeIcon
                onClick={() => dispatch(reset())}
                className="clickable"
                icon={faXmark}
                data-cy="clear-search"
              />
            </Animation.FadeIn>
          ) : (
            <Animation.FadeIn key="3">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Animation.FadeIn>
          )}
        </S.SearchBar.InputIcon>
        <S.SearchBar.Input
          onChange={handleChange}
          onClick={() => dispatch(open())}
          type="text"
          placeholder="Quick search"
          value={search.query}
          data-cy="search-input"
          data-testid="search-input"
        />
      </S.SearchBar.InputWrapper>
      {search.isOpen && (
        <OutsideClickHandler
          onOutsideClick={() => {
            dispatch(close());
          }}
        >
          <ResultsList />
        </OutsideClickHandler>
      )}
    </S.SearchBar.Wrapper>
  );
};

export default SearchBar;
