import { Navbar as NavbarEl } from "../styled-components/Navbar.styled";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <NavbarEl>
      <nav>
        <h1>
          <a href="/">BookScout</a>
        </h1>
        <SearchBar />
      </nav>
    </NavbarEl>
  );
};

export default Navbar;
