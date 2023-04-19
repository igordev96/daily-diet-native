import { IData, IFoodData } from '../interfaces/FoodData.interface';

const getLongestAllowedFoodSequence = (foodData: IFoodData[]): number => {
  let longestSequenceLength = 0;
  let currentSequenceLength = 0;
  let currentSequence: IData[] = [];

  for (const foodByDate of foodData) {
    for (const food of foodByDate.data) {
      if (food.isAllowed) {
        currentSequence.push(food);
        currentSequenceLength++;
        if (currentSequenceLength > longestSequenceLength) {
          longestSequenceLength = currentSequenceLength;
        }
      } else {
        currentSequence = [];
        currentSequenceLength = 0;
      }
    }
  }

  return longestSequenceLength;
};

export const getMealsInfo = (
  meals: IFoodData[]
): {
  allowedMeals: number;
  notAllowedMeals: number;
  total: number;
  allowedPercentage: string;
  bestSequency: number;
} => {
  let allowedMeals = 0;
  let notAllowedMeals = 0;
  let total = 0;
  let allowedPercentage = '0%';
  let bestSequency = 0;

  meals.map((meal) => {
    meal.data.map((data) => {
      if (data.isAllowed) {
        allowedMeals++;
      } else {
        notAllowedMeals++;
      }
    });
  });

  total = allowedMeals + notAllowedMeals;
  allowedPercentage = `${((allowedMeals / total) * 100).toFixed(2)}%`;

  bestSequency = getLongestAllowedFoodSequence(meals);

  return {
    allowedMeals,
    notAllowedMeals,
    total,
    allowedPercentage,
    bestSequency,
  };
};
