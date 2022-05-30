import * as S from "../Styles";
import { useState } from "react";
import { getBooksByTheme, removeCategory } from "../store/RecommendationsSlice";
import { useDispatch } from "react-redux";

const Button = ({ tag }) => {
  const [selected, setSelected] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    setSelected(!selected);
    selected ? dispatch(removeCategory(tag)) : dispatch(getBooksByTheme(tag));
  };

  return (
    <S.Recommendations.Button onClick={handleClick} selected={selected}>
      {tag}
    </S.Recommendations.Button>
  );
};

export default Button;
