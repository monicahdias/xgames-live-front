import * as S from "./style";
import image from "assets/images/image.jpg";

const GameCard = () => {
  return (
    <S.GameCard>
      <S.GameCardContent>
        <S.GameCardImage src={image} alt="image" />
        <S.GameCardRating />
      </S.GameCardContent>
    </S.GameCard>
  );
};

export default GameCard;
