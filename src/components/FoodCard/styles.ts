import { View, ViewProps } from 'react-native';
import styled, { css } from 'styled-components/native';

export interface ICircle extends ViewProps {
  isAllowed: boolean;
}

export const Container = styled.View`
  width: 100%;
  height: 48px;
  border-radius: 6px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_5};
  border-width: 1px;
  margin-bottom: 8px;
  padding: 14px 16px;
  flex-direction: row;
  align-items: center;
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const Hour = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const Separator = styled.View`
  height: 14px;
  width: 1px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_4};
`;

export const Food = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_2};
    margin-top: -2px;
  `}
`;

export const Circle = styled(View)<ICircle>`
  ${({ theme, isAllowed }) => css`
    width: 14px;
    height: 14px;
    border-radius: 14px;
    background-color: ${isAllowed
      ? theme.COLORS.GREEN_MID
      : theme.COLORS.RED_MID};
  `}
`;
