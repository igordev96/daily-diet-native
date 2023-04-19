export const convertMiliToDate = (dateMili: number) => {
  const date = new Date(dateMili);
  const year = date.getFullYear().toString().slice(-2);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${day}.${month}.${year}`;
};

export const convertMiliToHours = (dateMili: number) => {
  const date = new Date(dateMili);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${hours}:${minutes}`;
};
