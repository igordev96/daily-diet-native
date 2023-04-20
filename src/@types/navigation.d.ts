export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      overview: undefined;
      meal: {
        mode: 'add' | 'edit';
        id?: string;
      };
      feedback: {
        isDiet: boolean;
      };
    }
  }
}
