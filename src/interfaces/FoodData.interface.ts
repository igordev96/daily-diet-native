export interface IData {
  date: string;
  food: string;
  description: string;
  isAllowed: boolean;
}

export interface IFoodData {
  date: string;
  data: IData[];
}
