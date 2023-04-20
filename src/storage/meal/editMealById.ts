import { IData } from '../../interfaces/FoodData.interface';
import { removeMealById } from './removeMealById';
import { addMeal } from './addMeal';

export const editMealById = async (editedMeal: IData, day: string) => {
  try {
    await removeMealById(editedMeal.id);
    await addMeal(editedMeal, day);
  } catch (error) {
    throw error;
  }
};
