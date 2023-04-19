import * as S from './styles';

export interface ISectionHeader {
  children: string;
}

export default function SectionHeader(props: ISectionHeader) {
  const { children } = props;

  return <S.Container>{children}</S.Container>;
}
