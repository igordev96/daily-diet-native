import { randomUUID } from 'expo-crypto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getMeals } from './getMeals';
import { IFoodData } from '../../interfaces/FoodData.interface';
import { MEAL_COLLECTION } from '../storageConfig';

export const addIdInAllMeals = async () => {
  const meals = await getMeals();

  const newMeals: IFoodData[] = meals.map((meal) => ({
    date: meal.date,
    data: meal.data.map((item) => ({
      ...item,
      id: randomUUID(),
    })),
  }));

  await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(newMeals));
};
