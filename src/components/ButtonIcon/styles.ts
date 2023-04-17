import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export type ButtonIconStyleProps = 'PRIMARY' | 'SECONDARY' | 'THIRD';

type ButtonIconProps = {
  type: ButtonIconStyleProps;
};

export const Container = styled(TouchableOpacity)`
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(Feather).attrs<ButtonIconProps>(
  ({ theme, name, type }) => ({
    name,
    size: 24,
    color: type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  })
)``;
