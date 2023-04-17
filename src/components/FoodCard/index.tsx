import { IData } from '../../interfaces/FoodData.interface';
import * as S from './styles';

export interface IFoodCard {
  foodData: IData;
}

export default function FoodCard(props: IFoodCard) {
  const {
    foodData: { food, hour, isAllowed },
  } = props;

  return (
    <S.Container>
      <S.Content>
        <S.Hour>{hour}</S.Hour>
        <S.Separator />
        <S.Food>{food}</S.Food>
      </S.Content>
      <S.Circle isAllowed={isAllowed} />
    </S.Container>
  );
}
