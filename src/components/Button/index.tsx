import { TouchableOpacityProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as S from './styles';

export interface IButton extends TouchableOpacityProps {
  title: string;
  type?: S.ButtonTypes;
  icon?: keyof typeof Feather.glyphMap;
}

export default function Button(props: IButton) {
  const { title, icon, type = 'PRIMARY', ...rest } = props;

  return (
    <S.Container type={type} {...rest}>
      {!!icon && <S.Icon type={type} name={icon} />}
      <S.Title type={type}>{title}</S.Title>
    </S.Container>
  );
}
