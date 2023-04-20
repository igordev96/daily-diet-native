import { addIdInAllMeals } from '../../storage/meal/addIdInAllMeals';
import * as S from './styles';

export default function Header() {
  return (
    <S.Container
      onPress={async () => {
        await addIdInAllMeals();
      }}
    >
      <S.Logo />
      <S.ProfilePic />
    </S.Container>
  );
}
