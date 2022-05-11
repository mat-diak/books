import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchBooks } from "../store/searchSlice";
import debounce from "lodash.debounce";
import * as manyWorks from "../../scrap/manyWorks.json";
import SearchBarStyled from "../styled-components/SearchBarStyled";

const SearchBar = () => {
  const [open, toggleOpen] = useState(true);

  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);

  console.log("matches:", search.matches);

  const makeQuery = (query) => {
    dispatch(fetchSearchBooks(query));
  };

  const debouncedChangeHandler = debounce(
    (e) => makeQuery(e.target.value),
    1000
  );

  const imgUrl =
    "https://reststop.randomhouse.com/resources/titles/9780593289136";

  return (
    <SearchBarStyled>
      <input
        type="text"
        placeholder="Quick search"
        onChange={debouncedChangeHandler}
      ></input>
      {open && (
        <ul>
          {search.matches.map((work) => {
            return (
              <li key={work.workid}>
                <div className="details">
                  <h3>{work.titleweb}</h3>
                  <address>{work.authorweb}</address>
                </div>
                <img src={imgUrl} />
              </li>
            );
          })}
        </ul>
      )}
    </SearchBarStyled>
  );
};

export default SearchBar;
