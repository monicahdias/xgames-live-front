import ProfileCard from "components/ProfileCard";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {findAllService} from "services/findService";
import swal from "sweetalert";
import {profileObj} from "types/api/Profile";
import * as S from "./style";

const ProfileList = () => {
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState<profileObj[]>([]);

  useEffect(() => {
    getAll();
  }, []);

  const jwt = localStorage.getItem("jwtLocalStorage");

  const getAll = async () => {
    if (!jwt) {
      swal({
        title: "ERRO",
        text: "Faça o Login antes de entrar na página de profiles",
        icon: "error",
        timer: 7000,
      });
      navigate("/");
    } else {
      const response = await findAllService.allProfiles();
      if (response.status === 204) {
        swal({
          title: "Info",
          text: "Não existe jogo cadastrado!",
          icon: "info",
          timer: 7000,
        });
      } else {
        console.log(response.data);
        setProfiles(response.data);
      }
    }
  };
  return (
    <S.ProfileList>
      <ProfileCard />
    </S.ProfileList>
  );
};

export default ProfileList;
