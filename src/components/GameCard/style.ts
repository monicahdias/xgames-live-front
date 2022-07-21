import styled, {css} from "styled-components";

export const GameCard = styled.section`
  ${({theme}) => css`
    box-sizing: border-box;
    width: 257px;
    height: 281px;
    ${theme.mixins.gameCard()};
    align-items: flex-start;
    border-radius: 4px;
    cursor: pointer;
    margin: 1rem;
    &:hover {
      box-shadow: 0 0 10px 8px rgba(27, 153, 158, 0.6);
    }
  `}
  h3 {
    text-decoration: none;
    font-size: 1.1rem;
  }
`;

export const GameCardContent = styled.section`
  ${() => css`
    box-sizing: border-box;
    width: 257px;
    height: 281px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`;

export const GameCardImage = styled.img`
  ${() => css`
    width: 230px;
    height: 230px;
    margin-top: 10px;
    border-radius: 4px;
  `}
`;

export const GameCardRating = styled.section``;
