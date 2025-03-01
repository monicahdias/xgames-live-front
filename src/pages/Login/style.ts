import styled, {css} from "styled-components";
import background from "assets/images/background-image.png";

export const Login = styled.section`
  ${({theme}) => css`
    background-color: ${theme.colors.baseBg2};
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    width: 100vw;
    height: 100vh;
  `}
`;

export const LoginContent = styled.main`
  ${({theme}) => css`
    width: 100%;
    height: 100%;
    ${theme.mixins.overlay()};
    display: flex;
    justify-content: center;
    align-items: center; ;
  `}
`;
