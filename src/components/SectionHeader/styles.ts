import styled, { css } from 'styled-components/native';

export const Container = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    margin-bottom: 8px;
    margin-top: 28px;
  `}
`;
