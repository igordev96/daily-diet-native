import AsyncStorage from '@react-native-async-storage/async-storage';
import { IFoodData } from '../../interfaces/FoodData.interface';
import { MEAL_COLLECTION } from '../storageConfig';
import { sortByDateIFoodData } from '../../utils/sorters';

export const getMeals = async () => {
  try {
    const stringifiedMeals = await AsyncStorage.getItem(MEAL_COLLECTION);
    const meals: IFoodData[] = await JSON.parse(stringifiedMeals ?? '[]');

    return meals.sort(sortByDateIFoodData);
  } catch (error) {
    throw error;
  }
};
