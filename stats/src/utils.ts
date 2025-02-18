export const dateStringToDate = (dateString: string): Date => {
  const [day, month, year]: number[] = dateString
    .split('/')
    .map((part: string): number => parseInt(part));

  return new Date(year, month - 1, day);
};
