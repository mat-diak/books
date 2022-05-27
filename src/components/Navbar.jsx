import * as S from "../Styles";
import SearchBar from "./SearchBar";
import OutsideClickHandler from "react-outside-click-handler";
import { useDispatch } from "react-redux";
import { close } from "../store/searchSlice";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UnderlineLightBlue } from "../styled-components/Blocks.styled";
import Logo from "../../public/icon.png";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <>
      <S.Navbar.Wrapper>
        <S.Navbar.Heading href="/">
          <h1>
            <img src={Logo} alt="Book scout logo" />
            Books
          </h1>
        </S.Navbar.Heading>
        <OutsideClickHandler
          onOutsideClick={() => {
            dispatch(close());
          }}
        >
          <SearchBar />
        </OutsideClickHandler>
      </S.Navbar.Wrapper>
      <UnderlineLightBlue />
    </>
  );
};

export default Navbar;
