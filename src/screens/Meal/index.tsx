import { useEffect, useState } from 'react';
import { Alert, StatusBar } from 'react-native';
import { randomUUID } from 'expo-crypto';
import {
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import Button from '../../components/Button';
import ButtonIcon from '../../components/ButtonIcon';
import Datefields from '../../components/DateFields';
import InputField from '../../components/InputField';
import SelectButtons from '../../components/SelectButtons';
import { IData } from '../../interfaces/FoodData.interface';
import { addMeal } from '../../storage/meal/addMeal';
import { getMealById } from '../../storage/meal/getMealById';
import {
  convertMiliToDate,
  convertMiliToHours,
} from '../../utils/convertMiliToDate';
import * as S from './styles';
import ConfirmationModal from '../../components/ConfirmationModal';

type RouteParams = RouteProp<ParamListBase> & {
  params: {
    mode: 'add' | 'edit';
    id?: string;
  };
};

export default function Meal() {
  const {
    params: { mode, id },
  } = useRoute<RouteParams>();
  const { navigate } = useNavigation();
  const { COLORS } = useTheme();
  ///////
  const [type, setType] = useState<'edit' | 'remove' | 'none'>('none');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [isDiet, setIsDiet] = useState<boolean>(true);
  const [dateString, setDateString] = useState<string>(
    convertMiliToDate(Date.now())
  );
  const [timeString, setTimeString] = useState<string>(
    convertMiliToHours(Date.now())
  );
  ///////
  const handleGoHome = async () => {
    navigate('home');
  };

  const handleGoToFeedback = async () => {
    try {
      if (!name || !description) {
        return Alert.alert('Register', 'Please no empty fields');
      }
      const meal: IData = {
        id: randomUUID(),
        date: timeString,
        description,
        food: name,
        isAllowed: isDiet,
      };
      await addMeal(meal, dateString);
      navigate('feedback', { isDiet });
    } catch (error) {
      Alert.alert('Error', 'Strange error');
    }
  };

  const handleModal = (
    type: 'edit' | 'remove' | 'none',
    firstCall: boolean = false
  ) => {
    if (firstCall) {
      setType(type);
      setShowModal(true);
    } else {
      let test: string;

      switch (type) {
        case 'edit':
          test = 'edit';
          break;
        case 'remove':
          test = 'remove';
          break;
        case 'none':
        default:
          test = 'none';
          break;
      }
      console.log(test);
      setShowModal(false);
    }
  };

  const fetchMealById = async () => {
    try {
      setIsLoading(true);
      const meal = await getMealById(id);
      setName(meal.meal?.food ?? '');
      setDescription(meal.meal?.description ?? '');
      setIsDiet(meal.meal?.isAllowed ?? true);
      setDateString(meal.day ?? '');
      setTimeString(meal.meal?.date ?? '');
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchMealById();
    }
  }, [id]);

  const handleJSXElements = () => {
    switch (mode) {
      case 'edit':
        return (
          <>
            {isLoading ? null : (
              <>
                <StatusBar
                  barStyle='dark-content'
                  backgroundColor={
                    isDiet ? COLORS.GREEN_LIGHT : COLORS.RED_LIGHT
                  }
                />
                <S.Container isDiet={isDiet}>
                  <ButtonIcon
                    name='arrow-left'
                    type='THIRD'
                    onPress={handleGoHome}
                  />
                  <S.Title>Meal ({name})</S.Title>
                  <S.Content>
                    <InputField
                      value={name}
                      onChangeText={setName}
                      label='Name'
                    />
                    <InputField
                      value={description}
                      onChangeText={setDescription}
                      label='Description'
                      numberOfLines={4}
                      style={{ textAlignVertical: 'top' }}
                      multiline
                    />
                    <Datefields
                      dateString={dateString}
                      timeString={timeString}
                      setDateString={setDateString}
                      setTimeString={setTimeString}
                    />
                    <SelectButtons isDiet={isDiet} setIsDiet={setIsDiet} />
                    <S.ButtonsContainer>
                      <Button
                        icon='edit'
                        onPress={() => handleModal('edit', true)}
                        title='Edit meal'
                      />
                      <Button
                        icon='trash-2'
                        onPress={() => handleModal('remove', true)}
                        title='Remove meal'
                        type='SECONDARY'
                      />
                    </S.ButtonsContainer>
                  </S.Content>
                </S.Container>
              </>
            )}
            <ConfirmationModal
              type={type}
              handleModal={handleModal}
              isVisible={showModal}
            />
          </>
        );
      case 'add':
      default:
        return (
          <>
            <StatusBar
              barStyle='dark-content'
              backgroundColor={COLORS.GRAY_5}
            />
            <S.Container>
              <ButtonIcon
                name='arrow-left'
                type='THIRD'
                onPress={handleGoHome}
              />
              <S.Title>New meal</S.Title>
              <S.Content>
                <InputField value={name} onChangeText={setName} label='Name' />
                <InputField
                  value={description}
                  onChangeText={setDescription}
                  label='Description'
                  numberOfLines={4}
                  style={{ textAlignVertical: 'top' }}
                  multiline
                />
                <Datefields
                  timeString={timeString}
                  dateString={dateString}
                  setDateString={setDateString}
                  setTimeString={setTimeString}
                />
                <SelectButtons isDiet={isDiet} setIsDiet={setIsDiet} />
                <Button
                  onPress={handleGoToFeedback}
                  style={{ marginTop: 'auto' }}
                  title='Register meal'
                />
              </S.Content>
            </S.Container>
          </>
        );
    }
  };

  return handleJSXElements();
}
