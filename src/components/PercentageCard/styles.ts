import { View } from 'react-native';
import styled from 'styled-components/native';
import { IPercentageCard } from '.';

export const Container = styled(View)<IPercentageCard>`
  background-color: ${({ theme, type }) =>
    type === 'PRIMARY'
      ? theme.COLORS.GREEN_LIGHT
      : type === 'SECONDARY'
      ? theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_6};
  height: 102px;
  width: 100%;
  border-radius: 8px;
  padding: 20px 16px;
`;
