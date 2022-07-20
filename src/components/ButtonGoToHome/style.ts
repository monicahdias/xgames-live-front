import styled, {css} from "styled-components";

export const ButtonGoToHome = styled.button`
  ${({theme}) => css`
     {
      background-color: ${theme.colors.baseBg2};
      display: flex;
      margin: none;
      border: none;
      transition: all 0.3s;
      font-weight: bold;
      color: ${theme.colors.textColor};
      :hover {
        cursor: pointer;
        color: ${theme.colors.textColor};
        scale: 1.1;
      }
    }
  `}
`;
