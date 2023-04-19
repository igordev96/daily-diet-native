import { TextInputProps } from 'react-native';
import * as S from './styles';

export interface IInputField extends TextInputProps {
  label: string;
  width?: string | number;
}

export default function InputField(props: IInputField) {
  const { label, width, ...rest } = props;

  return (
    <S.Container width={width}>
      <S.Label>{label}</S.Label>
      <S.Input {...rest} />
    </S.Container>
  );
}
