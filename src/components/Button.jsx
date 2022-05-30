import * as S from "../Styles";
import { useState } from "react";
import { getBooksByTheme, reset } from "../store/RecommendationsSlice";
import { useDispatch, useSelector } from "react-redux";

const Button = ({ tag }) => {
  const [selected, setSelected] = useState(false);
  const dispatch = useDispatch();
  const results = useSelector((state) => state.recommendations.results);

  const handleClick = () => {
    setSelected(!selected);
    if (selected) {
      console.log(selected, "dispatching reseet");
      dispatch(reset());
    } else {
      dispatch(getBooksByTheme(tag));
    }
  };

  console.log("Results", results);

  return (
    <S.Recommendations.Button onClick={handleClick} selected={selected}>
      {tag}
    </S.Recommendations.Button>
  );
};

export default Button;
