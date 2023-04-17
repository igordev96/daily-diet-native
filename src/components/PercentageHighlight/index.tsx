import * as S from './styles';

export interface IPercentageHighlight {
  title: string;
  subtitle: string;
}

export default function PercentageHighlight(props: IPercentageHighlight) {
  const { title, subtitle } = props;

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.Container>
  );
}
