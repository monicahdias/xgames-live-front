import styled, {css} from "styled-components";
import background from "assets/images/background-image.png";

export const Homepage = styled.section`
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

export const HomepageContent = styled.main`
  ${({theme}) => css`
    width: 100%;
    height: 100%;
    ${theme.mixins.overlay()};
  `}
`;

export const HomepageHeader = styled.section`
  ${() => css`
    width: 100%;
    display: flex;
    align-self: flex-start;
  `}
`;

export const HomepageContentLogo = styled.div`
  ${() => css`
    width: 100%;
    display: flex;
    align-self: flex-start;
  `}
`;

export const HomepageLogoImage = styled.img`
  ${() => css`
    width: 10rem;
    margin-left: 1rem;
  `}
`;

export const HomepageButtons = styled.div`
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

export const HomepageGames = styled.div`
  ${() => css`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
  `}
`;
