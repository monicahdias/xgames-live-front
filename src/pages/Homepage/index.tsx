import * as S from "./style";
import logo from "assets/images/logo.png";
import Button1 from "components/Button1";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {profileObj} from "types/api/Profile";
import {findAllService} from "services/findService";
import ButtonGoToHome from "components/ButtonGoToHome";
import GameList from "components/GameList";

const Homepage = () => {
  const [profiles, setProfiles] = useState<profileObj[]>([]);
  const {id} = useParams();

  useEffect(() => {
    getAllProfiles();
  }, []);

  const getAllProfiles = async () => {
    const response = await findAllService.allProfiles();
    setProfiles(response.data);
  };

  function e(e: any, arg1: boolean) {
    throw new Error("Function not implemented.");
  }

  // let profile = profiles.filter(e, e.id == id);

  // profile.map((p) => {
  //   localStorage.setItem("profileImage", p.imageUrl);
  //   localStorage.setItem("profileTitle", p.title);
  //   localStorage.setItem("profileId", `${p.id}`);
  // });

  const handleClick = () => {
    window.location.href = "/";
  };

  return (
    <S.Homepage>
      <S.HomepageContent>
        <S.HomepageHeader>
          <ButtonGoToHome />
          <S.HomepageContentLogo>
            <S.HomepageLogoImage src={logo} alt="Logo" />
          </S.HomepageContentLogo>
          <S.HomepageButtons>
            <Button1 value="LOG OUT" type="button" onClick={handleClick} />
          </S.HomepageButtons>
        </S.HomepageHeader>
        <S.HomepageGames>
          <GameList />
        </S.HomepageGames>
      </S.HomepageContent>
    </S.Homepage>
  );
};
export default Homepage;
