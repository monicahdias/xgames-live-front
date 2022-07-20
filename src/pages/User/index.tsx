import ProfileList from "components/Profiles";
import * as S from "./style";
import logo from "assets/images/logo.png";
import Button1 from "components/Button1";

const User = () => {
  const handleClick = () => {
    window.location.href = "/";
  };

  return (
    <S.User>
      <S.UserContent>
        <S.UserpageHeader>
          <S.UserpageContentLogo>
            <S.UserpageLogoImage src={logo} alt="Logo" />
          </S.UserpageContentLogo>
          <S.UserpageButtons>
            <Button1 value="LOG OUT" type="button" onClick={handleClick} />
          </S.UserpageButtons>
        </S.UserpageHeader>
        <ProfileList />
      </S.UserContent>
    </S.User>
  );
};

export default User;
