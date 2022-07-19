import styled, {css} from "styled-components";

export const ButtonBack = styled.button`
  ${({theme}) => css`
     {
      width: 30%;
      height: 40px;
      margin: 10px 0;
      border-radius: 2px;
      cursor: pointer;
      border: none
      background-color: none
      font-size: 1em;
      transition: all 0.3s;
      font-weight: bold;
      box-shadow: 3px 3px 6px 3px ${theme.colors.primaryColorShadow};
      color: ${theme.colors.textColor};
      :hover {
        box-shadow: 3px 3px 6px 3px ${theme.colors.secondaryColorShadow};
        color: ${theme.colors.textColor};
      }
    }
  `}
`;
