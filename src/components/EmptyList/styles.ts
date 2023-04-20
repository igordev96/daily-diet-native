import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin-top: 140px;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.COLORS.GRAY_2};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
