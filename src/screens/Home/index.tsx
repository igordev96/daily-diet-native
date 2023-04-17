import { SectionList, Text } from 'react-native';
import Button from '../../components/Button';
import FoodCard from '../../components/FoodCard';
import Header from '../../components/Header';
import PercentageCard from '../../components/PercentageCard';
import SectionHeader from '../../components/SectionHeader';
import { FOODS } from '../../utils/FOODS';
import * as S from './styles';

export default function Home() {
  return (
    <S.Container>
      <Header />
      <PercentageCard
        type='PRIMARY'
        showButton
        handleButtonAction={() => console.log('test')}
      />
      <S.Content>
        <S.Text>Meals</S.Text>
        <Button title='New meal' icon='plus' />
        <SectionList
          showsVerticalScrollIndicator={false}
          sections={FOODS}
          renderSectionHeader={({ section }) => (
            <SectionHeader>{section.date}</SectionHeader>
          )}
          renderItem={({ item }) => <FoodCard foodData={item} />}
        />
      </S.Content>
    </S.Container>
  );
}
