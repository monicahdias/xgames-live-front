import * as S from "./style";
import logo from "assets/images/logo.png";
import Button1 from "components/Button1";
import Button2 from "components/Button2";
import Games from "components/Games";
import {useEffect, useState} from "react";
// import axios from "axios";
import {useNavigate} from "react-router-dom";

interface Games {
  id: string;
  title: string;
  coverImageUrl: string;
  description: string;
  year: number;
  imdbScore: number;
  trailerYouTubeUrl: string;
  gameplayYouTubeUrl: string;
  genreName?: string;
}

const Home = () => {
  const [games, setGames] = useState<Games[]>([]);

  // const getAllGames = async () => {
  //   const response = await axios.get(
  //     "https://xgames-live-server.herokuapp.com/api/game"
  //   );
  //   setGames(response.data);
  // };

  // try {
  //   const result = await axios.get(
  //     "https://xgames-live-server.herokuapp.com/api/game",
  //     {}
  //   );
  //   console.log(result.data);
  // } catch (err: any) {
  //   alert(err.message);
  // }
  // useEffect(() => {
  //   getAllGames();
  // });

  return (
    <S.Home>
      <S.HomeContent>
        <S.HomeHeader>
          <S.HomeContentLogo>
            <S.HomeLogoImage src={logo} alt="Logo" />
          </S.HomeContentLogo>
          <S.HomeButtons>
            <Button1 value="LOG IN" type="button" />
            <Button2 value="SIGN UP" type="button" />
          </S.HomeButtons>
        </S.HomeHeader>
        <S.HomeGames>
          <Games />
          <Games />
          <Games />
          <Games />
        </S.HomeGames>
      </S.HomeContent>
    </S.Home>
  );
};
export default Home;
