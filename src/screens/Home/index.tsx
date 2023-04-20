import { useCallback, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { SectionList, StatusBar } from 'react-native';
import { useTheme } from 'styled-components/native';
import Button from '../../components/Button';
import FoodCard from '../../components/FoodCard';
import Header from '../../components/Header';
import PercentageCard from '../../components/PercentageCard';
import SectionHeader from '../../components/SectionHeader';
import { IData, IFoodData } from '../../interfaces/FoodData.interface';
import { getMeals } from '../../storage/meal/getMeals';
import { checkDietMeals } from '../../utils/checkDietMeals';
import { getMealsInfo } from '../../utils/getMealsInfo';
import * as S from './styles';

export default function Home() {
  const { navigate } = useNavigation();
  const { COLORS } = useTheme();

  const [percentage, setPercentage] = useState<string>('75%');
  const [meals, setMeals] = useState<IFoodData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleCheckOverview = () => {
    navigate('overview');
  };

  const handleAddMeal = () => {
    navigate('meal', {
      mode: 'add',
    });
  };

  const handleOpenMeal = (item: IData) => {
    navigate('meal', {
      mode: 'edit',
      id: item.id,
    });
  };

  const fetchMeals = async () => {
    try {
      setIsLoading(true);
      const mealsData = await getMeals();
      setMeals(mealsData);
      const { allowedPercentage } = getMealsInfo(mealsData);
      setPercentage(allowedPercentage);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor={COLORS.GRAY_7} />
      {isLoading ? null : (
        <S.Container>
          <Header />
          <PercentageCard
            title={percentage}
            subtitle='of your daily diet!'
            type={checkDietMeals(percentage)}
            showButton
            handleButtonAction={handleCheckOverview}
          />
          <S.Content>
            <S.Text>Meals</S.Text>
            <Button title='New meal' icon='plus' onPress={handleAddMeal} />
            <SectionList
              showsVerticalScrollIndicator={false}
              sections={meals}
              renderSectionHeader={({ section }) => (
                <SectionHeader>{section.date}</SectionHeader>
              )}
              renderItem={({ item }) => (
                <FoodCard
                  onPress={() => handleOpenMeal(item)}
                  foodData={item}
                />
              )}
            />
          </S.Content>
        </S.Container>
      )}
    </>
  );
}
