function convertDate(date: string): number {
  const splitDate = date.split('-');
  const newDate = new Date(
    `${splitDate[2]},${splitDate[1]},${splitDate[0]}`
  ).getTime();
  return newDate;
}

export {convertDate}