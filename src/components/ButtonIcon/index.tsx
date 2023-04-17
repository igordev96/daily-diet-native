import { Feather } from '@expo/vector-icons';
import { TouchableOpacityProps } from 'react-native';
import * as S from './styles';

export interface IButtonIcon extends TouchableOpacityProps {
  type?: S.ButtonIconStyleProps;
  name: keyof typeof Feather.glyphMap;
}

export default function ButtonIcon(props: IButtonIcon) {
  const { type = 'PRIMARY', name, ...rest } = props;

  return (
    <S.Container {...rest}>
      <S.Icon type={type} name={name} />
    </S.Container>
  );
}
