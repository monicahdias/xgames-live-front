import * as S from "./style";
import {IoIosArrowBack} from "react-icons/io";
import {useNavigate} from "react-router-dom";

const ButtonGoToHome = () => {
  let Navigate = useNavigate();

  function goToStart() {
    Navigate("/");
  }
  return (
    <S.ButtonGoToHome>
      <IoIosArrowBack onClick={goToStart} />
    </S.ButtonGoToHome>
  );
};

export default ButtonGoToHome;
