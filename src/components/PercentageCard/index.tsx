import { ViewProps } from 'react-native';
import ButtonIcon from '../ButtonIcon';
import { ButtonIconStyleProps } from '../ButtonIcon/styles';
import PercentageHighlight from '../PercentageHighlight';
import * as S from './styles';

export interface IPercentageCard extends ViewProps {
  type?: ButtonIconStyleProps;
  showButton?: boolean;
  handleButtonAction?(): void;
}

export default function PercentageCard(props: IPercentageCard) {
  const { showButton = false, handleButtonAction, type = 'PRIMARY' } = props;

  return (
    <S.Container type={type}>
      {showButton && type !== 'THIRD' && (
        <ButtonIcon
          onPress={handleButtonAction}
          style={{ position: 'absolute', top: 0, right: 0 }}
          name='arrow-up-right'
          type={type}
        />
      )}
      <PercentageHighlight title='90.45%' subtitle='of your diet meals!' />
    </S.Container>
  );
}
