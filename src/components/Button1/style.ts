import styled, {css} from "styled-components";

export const Button1 = styled.button`
  ${({theme}) => css`
    background: ${theme.colors.primaryColor};
    border: none;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.7rem;
    width: 100%;
    cursor: pointer;
    ${theme.mixins.buttonStyle()}
    font-weight: 700;
    &:hover {
      color: ${theme.colors.primaryColor};
      background: ${theme.colors.textButton};
      box-shadow: none;
    }
  `}
`;
