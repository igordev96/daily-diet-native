import * as S from './styles';

export interface ISelectButtons {
  isDiet: boolean;
  setIsDiet: (newValue: boolean) => void;
}

export default function SelectButtons(props: ISelectButtons) {
  const { isDiet, setIsDiet } = props;

  return (
    <S.Container>
      <S.Label>Is it part of your diet?</S.Label>
      <S.Content>
        <S.Button
          onPress={() => {
            setIsDiet(true);
          }}
          type='PRIMARY'
          isSelected={isDiet}
        >
          <S.Dot type='PRIMARY' />
          <S.Text>Yes</S.Text>
        </S.Button>
        <S.Button
          onPress={() => {
            setIsDiet(false);
          }}
          type='SECONDARY'
          isSelected={!isDiet}
        >
          <S.Dot type='SECONDARY' />
          <S.Text>No</S.Text>
        </S.Button>
      </S.Content>
    </S.Container>
  );
}
