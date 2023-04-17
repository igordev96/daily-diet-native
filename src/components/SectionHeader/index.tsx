import * as S from './styles';

export interface ISectionHeader {
  children: number;
}

export default function SectionHeader(props: ISectionHeader) {
  const { children } = props;

  const convertMiliToDate = () => {
    const date = new Date(children);
    const year = date.getFullYear().toString().slice(-2);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate();
    return `${day}.${month}.${year}`;
  };

  return <S.Container>{convertMiliToDate()}</S.Container>;
}
