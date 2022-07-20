import * as S from "./style";
import logo from "assets/images/logo.png";
import Button1 from "components/Button1";
import Button2 from "components/Button2";
import ButtonGoToHome from "components/ButtonGoToHome";
import React, {useState} from "react";
import {loginService} from "services/authService";
import swal from "sweetalert";
import {userLoginObj} from "types/api/User";
import {useNavigate} from "react-router-dom";

const LoginBox = (props: any) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  const handleChangeValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((values: userLoginObj) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const loginUser = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const response = await loginService.login(values);
    const jwt = response.data.token;

    if (jwt) {
      localStorage.setItem("jwtLocalStorage", jwt);
      swal({
        title: "Welcome!",
        icon: "success",
        timer: 3000,
      });
      navigate("/user");
    }
    console.log(response.data);
    console.log(values);
  };

  function goToRegister() {
    navigate("/createaccount");
  }

  return (
    <S.LoginBox onSubmit={loginUser}>
      <ButtonGoToHome />
      <S.LoginBoxLogo>
        <S.LoginBoxLogoImg src={logo} alt="logo" />
      </S.LoginBoxLogo>
      <S.LoginBoxForm>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
          onChange={handleChangeValues}
          autoComplete="false"
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={handleChangeValues}
          required
        />
        <S.Buttons>
          <Button1 value="LOG IN" type="submit" onSubmit={loginUser} />

          <Button2 value="REGISTER" type="button" onClick={goToRegister} />
        </S.Buttons>
      </S.LoginBoxForm>
    </S.LoginBox>
  );
};

export default LoginBox;
