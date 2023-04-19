import {
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import Button from '../../components/Button';
import * as S from './styles';

type RouteParams = RouteProp<ParamListBase> & {
  params: {
    isDiet: boolean;
  };
};

export default function Feedback() {
  const { navigate } = useNavigation();
  const {
    params: { isDiet },
  } = useRoute<RouteParams>();

  const handleGoHome = () => {
    navigate('home');
  };

  return (
    <S.Container>
      <S.Title isDiet={isDiet}>
        {isDiet ? 'Keep going!' : 'What a pity!'}
      </S.Title>
      <S.Subtitle>
        You are{' '}
        <S.Highlight>
          {isDiet ? 'on your diet' : 'out of your diet'}
        </S.Highlight>
        . {isDiet ? 'Congrats' : "Don't give up"}!
      </S.Subtitle>
      <S.FeelingImage isDiet={isDiet} />
      <Button onPress={handleGoHome} title='Go to the home page' />
    </S.Container>
  );
}
