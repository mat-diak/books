import { useState } from "react";
import * as manyWorks from "../../scrap/manyWorks.json";
import SearchBarStyled from "../styled-components/SearchBarStyled";

const SearchBar = () => {
  const [results, setResults] = useState(manyWorks.work);

  const imgUrl =
    "https://reststop.randomhouse.com/resources/titles/9780593289136";

  return (
    <SearchBarStyled>
      <input type="text" placeholder="Quick search"></input>
      <ul>
        {results.map((work) => {
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
    </SearchBarStyled>
  );
};

export default SearchBar;
