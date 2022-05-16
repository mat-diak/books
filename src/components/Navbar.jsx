import { Navbar as NavbarEl } from "../styled-components/Navbar.styled";
import SearchBar from "./SearchBar";
import OutsideClickHandler from "react-outside-click-handler";
import { useDispatch } from "react-redux";
import { close } from "../store/searchSlice";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UnderlineLightBlue } from "../styled-components/Blocks.styled";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <>
      <NavbarEl>
        <h1>
          <FontAwesomeIcon icon={faBook} />
          <a href="/">BookScout</a>
        </h1>
        <OutsideClickHandler
          onOutsideClick={() => {
            dispatch(close());
          }}
        >
          <SearchBar />
        </OutsideClickHandler>
      </NavbarEl>
      <UnderlineLightBlue />
    </>
  );
};

export default Navbar;
