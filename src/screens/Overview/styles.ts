import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  margin-top: -12px;
  padding: 24px;
  gap: 12px;
`;

export const SideBySide = styled.View`
  width: 100%;
  gap: 12px;
  flex-direction: row;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
    text-align: center;
    margin-bottom: 8px;
  `}
`;
