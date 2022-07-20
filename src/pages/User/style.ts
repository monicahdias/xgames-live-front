import styled, {css} from "styled-components";
import background from "assets/images/background-image.png";

export const User = styled.section`
  ${({theme}) => css`
    background-color: ${theme.colors.baseBg2};
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    width: 100vw;
    height: 100vh;
  `}
`;

export const UserContent = styled.main`
  ${({theme}) => css`
    width: 100%;
    height: 100%;
    ${theme.mixins.overlay()};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `}
`;

export const UserpageHeader = styled.section`
  ${() => css`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  `}
`;

export const UserpageContentLogo = styled.div`
  ${() => css`
    width: 100%;
  `}
`;

export const UserpageLogoImage = styled.img`
  ${() => css`
    width: 10rem;
    margin-left: 1rem;
  `}
`;

export const UserpageButtons = styled.div`
  ${() => css`
    width: 10rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start
    justify-content: flex-end;
    margin: .5rem 1rem;
    gap: .5rem;
  
  `}
`;

export const UserpageGames = styled.div`
  ${() => css`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
  `}
`;
