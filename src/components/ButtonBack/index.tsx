import * as S from "./style";
import {IoIosArrowBack} from "react-icons/io";
import {useNavigate} from "react-router-dom";

const ButtonBack = () => {
  let Navigate = useNavigate();

  function goToStart() {
    Navigate("/");
  }
  return (
    <S.ButtonBack>
      <IoIosArrowBack onClick={goToStart} />
    </S.ButtonBack>
  );
};

export default ButtonBack;
