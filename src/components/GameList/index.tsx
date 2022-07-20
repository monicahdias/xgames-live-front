import GameCard from "components/GameCard";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {findAllService} from "services/findService";
import swal from "sweetalert";
import {gameDescObj} from "types/api/Game";
import * as S from "./style";

const GameList = () => {
  const navigate = useNavigate();
  const [games, setGames] = useState<gameDescObj[]>([]);

  useEffect(() => {
    getAll();
  }, []);

  const jwt = localStorage.getItem("jwtLocalStorage");

  const getAll = async () => {
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
        setGames(response.data);
      }
    }
  };
  return (
    <S.GameList>
      <GameCard />
    </S.GameList>
  );
};

export default GameList;
