export interface IData {
  hour: string;
  food: string;
  description: string;
  isAllowed: boolean;
}

export interface IFoodData {
  date: number;
  data: IData[];
}
