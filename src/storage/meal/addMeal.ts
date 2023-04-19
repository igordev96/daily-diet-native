import AsyncStorage from '@react-native-async-storage/async-storage';
import { IData, IFoodData } from '../../interfaces/FoodData.interface';
import { getMeals } from './getMeals';
import { MEAL_COLLECTION } from '../storageConfig';
import { sortByDateIData, sortByDateIFoodData } from '../../utils/sorters';

export const addMeal = async (meal: IData, date: string) => {
  try {
    const meals = await getMeals();
    const mealsByDate = meals.find((mealByDate) => mealByDate.date === date);
    let newMealsByDate: IFoodData;
    let newMeals: IFoodData[];
    if (!mealsByDate) {
      newMealsByDate = {
        date,
        data: [meal],
      };
      newMeals = [...meals, newMealsByDate].sort(sortByDateIFoodData);
    } else {
      newMealsByDate = {
        date: mealsByDate.date,
        data: [...mealsByDate.data, meal].sort(sortByDateIData),
      };
      const tempMeals = meals.filter((mealItem) => mealItem.date !== date);
      newMeals = [...tempMeals, newMealsByDate].sort(sortByDateIFoodData);
    }
    const stringifiedNewMeals = await JSON.stringify(newMeals);
    await AsyncStorage.setItem(MEAL_COLLECTION, stringifiedNewMeals);
  } catch (error) {
    throw error;
  }
};
