import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styled, { css } from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 50px;
  padding: 16px 24px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_2};
  border-radius: 6px;
  flex-direction: row;
  gap: 16px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.WHITE};
  `}
`;

export const Icon = styled(Feather).attrs(({ theme, name }) => ({
  size: 20,
  name,
  color: theme.COLORS.WHITE,
}))``;
