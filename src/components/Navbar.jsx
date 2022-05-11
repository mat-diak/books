import { Navbar as NavbarEl } from "../styled-components/Navbar.styled";
import { useState } from "react";
import * as manyWorks from "../../scrap/manyWorks.json";

const Navbar = () => {
  const [results, setResults] = useState(manyWorks.work);

  const imgUrl =
    "https://reststop.randomhouse.com/resources/titles/9780593289136";

  console.log(results);

  return (
    <NavbarEl>
      <nav>
        <h1>BookScout</h1>
        <div className="search-bar">
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
        </div>
      </nav>
    </NavbarEl>
  );
};

export default Navbar;
