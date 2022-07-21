import * as S from "./style";
import logo from "assets/images/logo.png";
import Button1 from "components/Button1";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {findAllService} from "services/findService";
import GameList from "components/GameList";

const Homepage = () => {
  const [game, setGame] = useState<any[]>([]);
  const navigate = useNavigate();

  const jwt = localStorage.getItem("jwtLocalStorage");

  useEffect(() => {
    getAllGames();
  }, []);

  const getAllGames = async () => {
    if (!jwt) {
      console.log("Error: token does not exist, please login");
      navigate("/login");
    } else {
      const response = await findAllService.allGames();

      console.log("Games shown", response);
      setGame(response.data.results);
    }
  };

  const handleClick = () => {
    window.location.href = "/";
  };

  return (
    <S.Homepage>
      <S.HomepageContent>
        <S.HomepageHeader>
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
