import AsyncStorage from '@react-native-async-storage/async-storage';
import { getMealById } from './getMealById';
import { getMeals } from './getMeals';
import { MEAL_COLLECTION } from '../storageConfig';

export const removeMealById = async (id: string) => {
  const allMeals = await getMeals();
  const response = await getMealById(id);

  try {
    if (!!response.mealsOfTheDay) {
      const index = response.mealsOfTheDay.data.findIndex(
        (meal) => meal.id === id
      );
      response.mealsOfTheDay.data.splice(index, 1);
      const newAllMeals = allMeals.map((meal) => {
        if (meal.date === response.mealsOfTheDay!.date) {
          return response.mealsOfTheDay!;
        }
        return meal;
      });
      const newAllMealsFiltered = newAllMeals.filter(
        (item) => item.data.length > 0
      );
      await AsyncStorage.setItem(
        MEAL_COLLECTION,
        JSON.stringify(newAllMealsFiltered)
      );
    } else {
      throw new Error("ID doesn't exist");
    }
  } catch (error) {
    throw error;
  }
};
