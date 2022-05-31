import * as S from "../Styles";
import {
  addCategory,
  getBooksByTheme,
  removeCategory,
  toggleTag,
} from "../store/RecommendationsSlice";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import * as Animation from "../styled-components/Animations.styled";

const Button = ({ tag }) => {
  const { isLoading, categories, tags } = useSelector(
    (state) => state.recommendations
  );

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleTag(tag));
    dispatch(addCategory(tag));
    tags[tag] ? dispatch(removeCategory(tag)) : dispatch(getBooksByTheme(tag));
  };

  return (
    <S.Recommendations.Button onClick={handleClick} selected={tags[tag]}>
      {isLoading && categories.includes(tag) ? (
        <Animation.FadeIn key="1">
          <FontAwesomeIcon icon={faCircleNotch} className="fa-spin" />
        </Animation.FadeIn>
      ) : (
        tag
      )}
    </S.Recommendations.Button>
  );
};

export default Button;
