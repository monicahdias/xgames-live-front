import * as S from "./style";
import image from "assets/images/image.jpg";

const ProfileCard = () => {
  return (
    <S.ProfileCard>
      <S.ProfileCardContent>
        <S.ProfileCardImage src={image} alt="image" />
        <S.ProfileCardRating />
      </S.ProfileCardContent>
    </S.ProfileCard>
  );
};

export default ProfileCard;
