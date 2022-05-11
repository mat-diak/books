import { Navbar as NavbarEl } from "../styled-components/Navbar.styled";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <NavbarEl>
      <nav>
        <h1>BookScout</h1>
        <SearchBar />
      </nav>
    </NavbarEl>
  );
};

export default Navbar;
