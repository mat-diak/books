import * as S from "../Styles";
import SearchBar from "./SearchBar";
import { useDispatch } from "react-redux";
import { reset } from "../store/mainSlice";
import Logo from "../../public/icon.png";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <>
      <S.Navbar.Wrapper>
        <S.Navbar.Heading onClick={() => dispatch(reset())}>
          <h1>
            <img src={Logo} alt="Books logo" />
            Books
          </h1>
        </S.Navbar.Heading>
        <SearchBar />
      </S.Navbar.Wrapper>
      <S.Blocks.Underline color="var(--blue-1)" weight="1px" />
    </>
  );
};

export default Navbar;
