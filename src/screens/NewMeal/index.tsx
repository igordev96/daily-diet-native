import { useState } from 'react';
import { Alert, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import Button from '../../components/Button';
import ButtonIcon from '../../components/ButtonIcon';
import Datefields from '../../components/DateFields';
import InputField from '../../components/InputField';
import SelectButtons from '../../components/SelectButtons';
import {
  convertMiliToDate,
  convertMiliToHours,
} from '../../utils/convertMiliToDate';
import * as S from './styles';
import { IData } from '../../interfaces/FoodData.interface';
import { addMeal } from '../../storage/meal/addMeal';

export default function NewMeal() {
  const { navigate } = useNavigation();
  const { COLORS } = useTheme();
  ///////
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
  const handleGoHome = () => {
    navigate('home');
  };

  const handleGoToFeedback = async () => {
    try {
      if (!name || !description) {
        return Alert.alert('Register', 'Please no empty fields');
      }
      const meal: IData = {
        date: timeString,
        description,
        food: name,
        isAllowed: isDiet,
      };
      await addMeal(meal, dateString);
      navigate('feedback', { isDiet });
    } catch (error) {
      Alert.alert('Error', 'Strange error');
    } finally {
    }
  };

  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor={COLORS.GRAY_5} />
      <S.Container>
        <ButtonIcon name='arrow-left' type='THIRD' onPress={handleGoHome} />
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
