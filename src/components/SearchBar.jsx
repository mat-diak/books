import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";
import Spinner from "./Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import {
  fetchSearchBooks,
  reset,
  close,
  open,
  updateQuery,
} from "../store/searchSlice";
import { selectTitle } from "../store/mainSlice";
import debounce from "lodash.debounce";
import SearchBarStyled from "../styled-components/SearchBarStyled";

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

  const getImageUrl = (isbn) => {
    return `https://reststop.randomhouse.com/resources/titles/${isbn}`;
  };

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
    <SearchBarStyled>
      <div className="input-wrapper">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input
          type="text"
          placeholder="Quick search"
          onChange={handleChange}
          onClick={() => dispatch(open())}
        ></input>
      </div>
      {search.isOpen && (
        <ul>
          {search.isLoading ? (
            <Spinner />
          ) : (
            search.matches.map((title) => {
              return (
                <li onClick={() => handleClick(title)} key={title.isbn}>
                  <div className="details">
                    <h3>{title.titleweb}</h3>
                    <address>{title.authorweb}</address>
                  </div>
                  <img src={getImageUrl(title.isbn)} />
                </li>
              );
            })
          )}
        </ul>
      )}
    </SearchBarStyled>
  );
};

export default SearchBar;
