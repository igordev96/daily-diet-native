import { ViewProps } from 'react-native';
import styled, { css } from 'styled-components/native';

type ContainerProps = ViewProps & {
  isDiet?: boolean;
};

export const Container = styled.View<ContainerProps>`
  flex: 1;
  background-color: ${({ theme, isDiet }) =>
    isDiet
      ? theme.COLORS.GREEN_LIGHT
      : isDiet === false
      ? theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_5};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    text-align: center;
    margin-top: -36px;
  `}
`;

export const Content = styled.View`
  flex: 1;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  margin-top: 24px;
  padding: 40px 24px 24px;
  gap: 32px;
`;

export const ButtonsContainer = styled.View`
  margin-top: auto;
  gap: 8px;
`;
