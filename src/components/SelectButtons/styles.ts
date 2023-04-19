import { TouchableOpacityProps, ViewProps } from 'react-native';
import styled, { css } from 'styled-components/native';

export type ColorType = 'PRIMARY' | 'SECONDARY';

type ButtonTypeProps = TouchableOpacityProps & {
  isSelected: boolean;
  type: ColorType;
};

type DotTypeProps = ViewProps & {
  type: ColorType;
};

export const Container = styled.View`
  gap: 4px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_2};
  `}
`;

export const Content = styled.View`
  flex-direction: row;
  width: 100%;
  gap: 8px;
`;

export const Button = styled.TouchableOpacity<ButtonTypeProps>`
  ${({ theme, isSelected, type }) => css`
    background-color: ${type === 'PRIMARY' && isSelected
      ? theme.COLORS.GREEN_LIGHT
      : type === 'SECONDARY' && isSelected
      ? theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_6};
    border: ${type === 'PRIMARY' && isSelected
      ? `1px ${theme.COLORS.GREEN_DARK}`
      : type === 'SECONDARY' && isSelected
      ? `1px ${theme.COLORS.RED_DARK}`
      : '0'};
    flex: 1;
    align-items: center;
    justify-content: center;
    height: 50px;
    border-radius: 6px;
    flex-direction: row;
    gap: 8px;
  `}
`;

export const Dot = styled.View<DotTypeProps>`
  height: 8px;
  width: 8px;
  border-radius: 8px;
  background-color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`;
