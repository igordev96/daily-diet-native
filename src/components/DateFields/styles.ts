import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  gap: 12px;
`;

export const Column = styled.View`
  width: 48.5%;
  gap: 4px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_2};
  `}
`;

export const Content = styled.TouchableOpacity`
  ${({ theme }) => css`
    border-width: 1px;
    border-color: ${theme.COLORS.GRAY_5};
    border-radius: 6px;
    padding: 8px;
  `}
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
  `}
`;
