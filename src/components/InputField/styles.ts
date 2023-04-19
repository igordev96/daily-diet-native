import { View, ViewProps } from 'react-native';
import styled, { css } from 'styled-components/native';

type ContainerType = ViewProps & { width?: string | number };

export const Container = styled(View)<ContainerType>`
  width: ${({ width }) => width ?? '100%'};
  gap: 4px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_2};
  `}
`;

export const Input = styled.TextInput`
  ${({ theme }) => css`
    border-width: 1px;
    border-color: ${theme.COLORS.GRAY_5};
    border-radius: 6px;
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
    padding: 8px;
  `}
`;
