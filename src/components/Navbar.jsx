import { Navbar as NavbarEl } from "../styled-components/Navbar.styled";
import SearchBar from "./SearchBar";
import OutsideClickHandler from "react-outside-click-handler";
import { useDispatch } from "react-redux";
import { close } from "../store/searchSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <NavbarEl>
      <nav>
        <h1>
          <a href="/">BookScout</a>
        </h1>
        <OutsideClickHandler
          onOutsideClick={() => {
            dispatch(close());
          }}
        >
          <SearchBar />
        </OutsideClickHandler>
      </nav>
    </NavbarEl>
  );
};

export default Navbar;
