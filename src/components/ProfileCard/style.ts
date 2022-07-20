import styled, {css} from "styled-components";

export const ProfileCard = styled.section``;

export const ProfileCardContent = styled.section`
  ${({theme}) => css`
    width: 257px;
    height: 281px;
    ${theme.mixins.gameCard()};
    display: flex;
    justify-content: center;
    align-items: flex-start;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      box-shadow: 0 0 10px 8px rgba(27, 153, 158, 0.6);
    }
  `}
`;

export const ProfileCardImage = styled.img`
  ${() => css`
    width: 230px;
    margin-top: 10px;
    border-radius: 4px;
  `}
`;

export const ProfileCardRating = styled.section``;
