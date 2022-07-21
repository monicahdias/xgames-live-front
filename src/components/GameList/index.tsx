import GameCard from "components/GameCard";
import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {findAllService} from "services/findService";
import swal from "sweetalert";
import {gameObj} from "types/api/Game";
import * as S from "./style";

const GameList = () => {
  const navigate = useNavigate();
  const [game, setGame] = useState<gameObj[]>([]);

  useEffect(() => {
    allGames();
  }, []);

  const jwt = localStorage.getItem("jwtLocalStorage");

  const allGames = async () => {
    if (!jwt) {
      swal({
        title: "ERRO",
        text: "Faça o Login antes de entrar na página de games",
        icon: "error",
        timer: 7000,
      });
      navigate("/");
    } else {
      const response = await findAllService.allGames();
      if (response.status === 204) {
        swal({
          title: "Info",
          text: "Não existe jogo cadastrado!",
          icon: "info",
          timer: 7000,
        });
      } else {
        console.log(response.data);
        setGame(response.data);
      }
    }
  };
  return (
    <S.GameList>
      {game.map((game: gameObj, index) => (
        <Link to={`/homepage/${game.id}`} state={{id: game.id}} key={index}>
          <GameCard data={game} />
        </Link>
      ))}
    </S.GameList>
  );
};

export default GameList;
