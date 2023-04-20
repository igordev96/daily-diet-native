import { StatusBar } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import PercentageCard from '../../components/PercentageCard';
import {
  checkDietMeals,
  checkDietMealsInColor,
} from '../../utils/checkDietMeals';
import * as S from './styles';
import { useCallback, useState } from 'react';
import { IFoodData } from '../../interfaces/FoodData.interface';
import { getMeals } from '../../storage/meal/getMeals';
import { getMealsInfo } from '../../utils/getMealsInfo';

export default function Overview() {
  const { navigate } = useNavigation();

  const [meals, setMeals] = useState<IFoodData[]>([]);
  const [percentage, setPercentage] = useState<string>('75%');
  const [dietMealsQuantity, setDietMealsQuantity] = useState<number>(0);
  const [notDietMealsQuantity, setNotDietMealsQuantity] = useState<number>(0);
  const [totalMeals, setTotalMeals] = useState<number>(0);
  const [bestSequency, setBestSequency] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleGoHome = () => {
    navigate('home');
  };

  const fetchMeals = async () => {
    try {
      setIsLoading(true);
      const mealsData = await getMeals();
      setMeals(mealsData);
      const {
        allowedMeals,
        notAllowedMeals,
        total,
        allowedPercentage,
        bestSequency,
      } = getMealsInfo(mealsData);
      setPercentage(allowedPercentage);
      setDietMealsQuantity(allowedMeals);
      setNotDietMealsQuantity(notAllowedMeals);
      setTotalMeals(total);
      setBestSequency(bestSequency);
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
      {isLoading ? null : (
        <>
          <StatusBar
            barStyle='dark-content'
            backgroundColor={checkDietMealsInColor(percentage)}
          />
          <S.Container>
            <PercentageCard
              title={percentage}
              subtitle='of your daily diet!'
              arrowPosition='TOP-LEFT'
              type={checkDietMeals(percentage)}
              showButton
              handleButtonAction={handleGoHome}
            />
            <S.Content>
              <S.Title>Overview</S.Title>
              <PercentageCard
                title={bestSequency.toString()}
                subtitle='best streak of diet meals'
                type={'THIRD'}
              />
              <PercentageCard
                title={totalMeals.toString()}
                subtitle='registered meals'
                type={'THIRD'}
              />
              <S.SideBySide>
                <PercentageCard
                  style={{ width: '48.5%' }}
                  title={dietMealsQuantity.toString()}
                  subtitle='meals in your diet'
                  type={'PRIMARY'}
                />
                <PercentageCard
                  style={{ width: '48.5%' }}
                  title={notDietMealsQuantity.toString()}
                  subtitle='meals out of your diet'
                  type={'SECONDARY'}
                />
              </S.SideBySide>
            </S.Content>
          </S.Container>
        </>
      )}
    </>
  );
}
