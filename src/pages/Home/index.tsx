import * as S from "./style";
import logo from "assets/images/logo.png";
import {useState} from "react";
import Button1 from "components/Button1";
import {Link} from "react-router-dom";
import ButtonGoToHome from "components/ButtonGoToHome";

function Home() {
  const handleClick = () => {
    window.location.href = "/signup";
  };
  return (
    <S.Home>
      <S.HomeContent>
        <article>Welcome to</article>

        <S.HomeContentLogo>
          <S.HomeLogoImage src={logo} alt="Logo" />
        </S.HomeContentLogo>
        <article>
          <p>If you want to have a gaming experience</p>
        </article>
        <S.Button>
          <Button1 value="JOIN US" type="button" onClick={handleClick} />
        </S.Button>

        <article>
          <p>
            or <Link to="/login">sign in</Link>
          </p>
        </article>
      </S.HomeContent>
    </S.Home>
  );
}

export default Home;
