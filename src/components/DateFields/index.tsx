import { useState } from 'react';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import {
  convertMiliToDate,
  convertMiliToHours,
} from '../../utils/convertMiliToDate';
import * as S from './styles';

export interface IDateFields {
  dateString: string;
  setDateString(value: string): void;
  timeString: string;
  setTimeString(value: string): void;
}

export default function Datefields(props: IDateFields) {
  const { dateString, timeString, setDateString, setTimeString } = props;

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState<'date' | 'time'>('date');

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    let currentDate = selectedDate ?? new Date();
    setShow(false);
    setDate(currentDate);
    setDateString(convertMiliToDate(currentDate.getTime()));
    setTimeString(convertMiliToHours(currentDate.getTime()));
  };

  const handleOpenDate = () => {
    setMode('date');
    setShow(true);
  };

  const handleOpenTime = () => {
    setMode('time');
    setShow(true);
  };

  return (
    <>
      <S.Container>
        <S.Column>
          <S.Label>Date</S.Label>
          <S.Content onPress={handleOpenDate}>
            <S.Text>{dateString}</S.Text>
          </S.Content>
        </S.Column>
        <S.Column>
          <S.Label>Time</S.Label>
          <S.Content onPress={handleOpenTime}>
            <S.Text>{timeString}</S.Text>
          </S.Content>
        </S.Column>
      </S.Container>
      {show && (
        <DateTimePicker
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </>
  );
}
