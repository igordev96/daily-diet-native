import { TouchableOpacityProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as S from './styles';

export interface IButton extends TouchableOpacityProps {
  title: string;
  icon?: keyof typeof Feather.glyphMap;
}

export default function Button(props: IButton) {
  const { title, icon, ...rest } = props;

  return (
    <S.Container {...rest}>
      {!!icon && <S.Icon name={icon} />}
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
