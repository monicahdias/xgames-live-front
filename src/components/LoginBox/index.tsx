import * as S from "./style";
import logo from "assets/images/logo.png";
import Button1 from "components/Button1";
import Button2 from "components/Button2";
import {useState} from "react";

interface userLogin {
  email: string;
  password: string;
}

const LoginBox = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChangesValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nameElement = event.target.name;
    const typedElement = event.target.value;

    setValues((values: userLogin) => {
      return {
        ...values,
        [event.target.name]: event.target.value,
      };
    });
  };

  const loginUser = (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log(values);
  };

  return (
    <S.LoginBox>
      <S.LoginBoxLogo>
        <S.LoginBoxLogoImg src={logo} alt="logo" />
      </S.LoginBoxLogo>
      <S.LoginBoxForm onSubmit={loginUser}>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="E-mail"
          onChange={handleChangesValues}
          autoComplete="false"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={handleChangesValues}
        />
        <S.Buttons>
          <Button1 value="LOG IN" type="submit" />
          <Button2 value="REGISTER" type="button" />
        </S.Buttons>
      </S.LoginBoxForm>
    </S.LoginBox>
  );
};

export default LoginBox;
