import Button from '../Button';
import * as S from './styles';

export interface IonfirmationModal {
  isVisible: boolean;
  handleModal: (type: 'edit' | 'remove' | 'none') => void;
  type: 'edit' | 'remove' | 'none';
}

export default function ConfirmationModal(props: IonfirmationModal) {
  const { isVisible, handleModal, type } = props;

  return (
    <S.Modal animationType='slide' visible={isVisible} transparent>
      <S.Container>
        <S.Content>
          <S.Title>Are you sure you want to {type}?</S.Title>
          <S.Row>
            <Button
              onPress={() => handleModal('none')}
              style={{ width: '48.5%' }}
              type='SECONDARY'
              title='Cancel'
            />
            <Button
              onPress={() => handleModal(type)}
              style={{ width: '48.5%' }}
              title='Yes'
            />
          </S.Row>
        </S.Content>
      </S.Container>
    </S.Modal>
  );
}
