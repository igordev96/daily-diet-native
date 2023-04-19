import { ButtonIconStyleProps } from '../components/ButtonIcon/styles';
import themes from '../themes';

type ValueOf<T> = T[keyof T];

export const checkDietMeals = (percentage: string): ButtonIconStyleProps => {
  const percentageinNumber = +percentage.slice(0, -1);

  return percentageinNumber >= 75 ? 'PRIMARY' : 'SECONDARY';
};

export const checkDietMealsInColor = (
  percentage: string
): ValueOf<typeof themes.COLORS> => {
  const percentageinNumber = +percentage.slice(0, -1);

  return percentageinNumber >= 75
    ? themes.COLORS.GREEN_LIGHT
    : themes.COLORS.RED_LIGHT;
};
