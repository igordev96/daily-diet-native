import styled from 'styled-components/native';
import logoImg from '../../assets/logo.png';
import profile from '../../assets/profile.png';

export const Container = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 36px;
`;

export const Logo = styled.Image.attrs({
  source: logoImg,
})`
  width: 82px;
  height: 37px;
`;

export const ProfilePic = styled.Image.attrs({
  source: profile,
})`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_1};
  border-width: 2px;
`;
