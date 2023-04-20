import { IData, IFoodData } from '../../interfaces/FoodData.interface';
import { getMeals } from './getMeals';

export type ResponseType = {
  day: string | undefined;
  meal: IData | undefined;
  mealsOfTheDay: IFoodData | undefined;
};

export const getMealById = async (id: string): Promise<ResponseType> => {
  try {
    const meals = await getMeals();
    let meal: IData | undefined;

    const mealsOfTheDay = meals.find((mealItem) => {
      meal = mealItem.data.find((item) => item.id === id);
      return meal;
    });

    const response = {
      day: mealsOfTheDay?.date,
      meal,
      mealsOfTheDay,
    };

    return response;
  } catch (error) {
    throw error;
  }
};
