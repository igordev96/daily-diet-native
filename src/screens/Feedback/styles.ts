import { Image, ImageProps, TextProps } from 'react-native';
import styled, { css } from 'styled-components/native';
import happyImg from '../../assets/happy.png';
import disappointedImg from '../../assets/disappointed.png';

type ImageType = ImageProps & {
  isDiet: boolean;
};

type TitleType = TextProps & {
  isDiet: boolean;
};

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;

export const Title = styled.Text<TitleType>`
  ${({ theme, isDiet }) => css`
    color: ${isDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;

export const Highlight = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;

export const FeelingImage = styled.Image.attrs(
  ({ isDiet }: ImageType): ImageProps => ({
    source: isDiet ? happyImg : disappointedImg,
  })
)<ImageType>`
  margin: 32px 0;
`;
