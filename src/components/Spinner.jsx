import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import * as S from "../Styles";

const Spinner = () => {
  return (
    <S.Shared.Spinner>
      <FontAwesomeIcon icon={faCircleNotch} className="fa-spin" />
    </S.Shared.Spinner>
  );
};

export default Spinner;
