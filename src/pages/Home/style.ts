import styled, {css} from "styled-components";
import background from "assets/images/background-image.png";
import {constants} from "assets/styles/constants";
import {colors} from "assets/styles/colors";

export const Home = styled.section`
  ${({theme}) => css`
    background-color: ${theme.colors.baseBg2};
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    min-width: 100vw;
    min-height: 100vh;
    color: ${theme.colors.textColor};
  `}
`;

export const HomeContent = styled.main`
  ${({theme}) => css`
    width: 100%;
    height: 100%;
    ${theme.mixins.overlay()};
    display: flex;
    flex-direction: column;

    justify-content: center;

    article {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-family: ${constants.bodyFontFamily};
      color: ${colors.textColor};
      font-size: 2.3rem;
    }

    article p {
      text-decoration: none;
      font-family: ${constants.bodyFontFamily};
      color: ${colors.textColor};
      font-size: 1.5rem;
      margin: 0 2rem 0 2rem;
    }

    article p Link {
      text-decoration: none;
    }
  `}
`;

export const HomeText = styled.div`
  ${({theme}) => css`
    font-size: 1.5rem;
    font-weight: bold;
    color: ${theme.colors.textColor};
  `}
`;

export const HomeContentLogo = styled.div`
  ${() => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const HomeLogoImage = styled.img`
  ${() => css`
    width: 25rem;
    margin: 2rem;
  `}
`;

export const Button = styled.div`
  ${() => css`
    background-color: none;
    width: 12rem;
    margin: 0;
    border: none;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    margin: 1.5rem 1rem 1rem 1rem;
  `}
`;
