import styled, {css} from "styled-components";

export const LoginBox = styled.section`
  ${({theme}) => css`
    background-color: ${theme.colors.baseBg2};
    width: 330px;
    height: 414px;
    padding: 20px 20px 35px 20px;
    margin: 20px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    box-shadow: 3px 3px 6px 3px ${theme.colors.primaryColorShadow};
    color: ${theme.colors.textColor};
  `}
`;

export const LoginBoxLogo = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 30px;
  `}
`;

export const LoginBoxLogoImg = styled.img`
  ${() => css`
    width: 230px;
  `}
`;

export const LoginBoxForm = styled.form`
  ${({theme}) => css`
    display: flex;
    flex-direction: column;
    gap: 16px;
    input {
      ${theme.mixins.input()};
    }
  `}
`;

export const Buttons = styled.div`
  ${() => css`
    background-color: none;
    width: 10rem;
    margin: 0;
    border: none;
    padding: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    gap: 0.8rem;
    margin-top: 0.8rem;
  `}
`;
