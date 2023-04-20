import styled, { css } from 'styled-components/native';

export const Modal = styled.Modal``;

export const Container = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.25);
  padding: 0 24px;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  background-color: white;
  width: 100%;
  padding: 24px;
  border-radius: 8px;
  gap: 24px;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_2};
    text-align: center;
  `}
`;

export const Row = styled.View`
  flex-direction: row;
  width: 100%;
  gap: 12px;
`;
