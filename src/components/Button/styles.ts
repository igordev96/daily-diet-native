import {
  TouchableOpacity,
  TouchableOpacityProps,
  TextProps,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import styled, { css } from 'styled-components/native';

export type ButtonTypes = 'PRIMARY' | 'SECONDARY';

type ContainerType = TouchableOpacityProps & {
  type: ButtonTypes;
};

type TitleType = TextProps & {
  type: ButtonTypes;
};

export const Container = styled(TouchableOpacity)<ContainerType>`
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.COLORS.GRAY_2 : theme.COLORS.WHITE};
  border: ${({ theme, type }) =>
    type === 'PRIMARY' ? `1px ${theme.COLORS.GRAY_2}` : ''};
  border-radius: 6px;
  flex-direction: row;
  gap: 16px;
`;

export const Title = styled.Text<TitleType>`
  ${({ theme, type }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_2};
  `}
`;

export const Icon = styled(Feather).attrs<any>(({ theme, name, type }) => ({
  size: 20,
  name,
  color: type === 'PRIMARY' ? theme.COLORS.WHITE : 'black',
}))``;
