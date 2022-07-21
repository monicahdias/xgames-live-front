import * as S from "./style";

const GameCard = ({data}: any) => {
  return (
    <S.GameCard>
      <S.GameCardContent>
        <S.GameCardImage src={data.coverImageUrl} alt="image" />
        <h3>{data.title}</h3>
        <p>{data.imdbScore}</p>
        <S.GameCardRating />
      </S.GameCardContent>
    </S.GameCard>
  );
};

export default GameCard;
