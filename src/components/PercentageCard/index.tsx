import { ViewProps } from 'react-native';
import ButtonIcon from '../ButtonIcon';
import { ButtonIconStyleProps } from '../ButtonIcon/styles';
import PercentageHighlight from '../PercentageHighlight';
import * as S from './styles';

export interface IPercentageCard extends ViewProps {
  title?: string;
  subtitle?: string;
  arrowPosition?: 'TOP-LEFT' | 'TOP-RIGHT' | 'BOTTOM-RIGHT' | 'BOTTOM-LEFT';
  type?: ButtonIconStyleProps;
  showButton?: boolean;
  handleButtonAction?(): void;
}

export default function PercentageCard(props: IPercentageCard) {
  const {
    arrowPosition = 'TOP-RIGHT',
    handleButtonAction,
    title = '',
    subtitle = '',
    showButton = false,
    type = 'PRIMARY',
    ...rest
  } = props;

  const iconButtonPosition = (): {
    position: 'absolute';
    top?: number;
    left?: number;
    bottom?: number;
    right?: number;
  } => {
    switch (arrowPosition) {
      case 'TOP-LEFT':
        return { position: 'absolute', top: 0, left: 0 };
      case 'BOTTOM-RIGHT':
        return { position: 'absolute', bottom: 0, right: 0 };
      case 'BOTTOM-LEFT':
        return { position: 'absolute', bottom: 0, left: 0 };
      case 'TOP-RIGHT':
      default:
        return { position: 'absolute', top: 0, right: 0 };
    }
  };

  return (
    <S.Container arrowPosition={arrowPosition} type={type} {...rest}>
      {showButton && type !== 'THIRD' && (
        <ButtonIcon
          onPress={handleButtonAction}
          style={iconButtonPosition()}
          name={arrowPosition === 'TOP-LEFT' ? 'arrow-left' : 'arrow-up-right'}
          type={type}
        />
      )}
      <PercentageHighlight title={title} subtitle={subtitle} />
    </S.Container>
  );
}
