import { IData, IFoodData } from '../interfaces/FoodData.interface';

const sortByDateIFoodData = (a: IFoodData, b: IFoodData): number => {
  const aDate = new Date(a.date.split('.').reverse().join('-'));
  const bDate = new Date(b.date.split('.').reverse().join('-'));

  if (aDate < bDate) {
    return 1;
  }
  if (aDate > bDate) {
    return -1;
  }
  return 0;
};

const sortByDateIData = (a: IData, b: IData): number => {
  const aHours = parseInt(a.date.split(':')[0]);
  const aMinutes = parseInt(a.date.split(':')[1]);
  const bHours = parseInt(b.date.split(':')[0]);
  const bMinutes = parseInt(b.date.split(':')[1]);

  if (aHours < bHours) {
    return -1;
  } else if (aHours > bHours) {
    return 1;
  } else {
    if (aMinutes < bMinutes) {
      return -1;
    } else if (aMinutes > bMinutes) {
      return 1;
    } else {
      return 0;
    }
  }
};

export { sortByDateIFoodData, sortByDateIData };
