export const getAbbreviation = (string) => {
  if (/^[A-Za-z0-9]*$/.test(string[0])) {
    return string.match(/[A-Z]/g).splice(0, 2);
  } else {
    return string[0];
  }
};

export const parseDate = (date) => {
  return date
    .slice(0, 10)
    .split('-')
    .map((item) => Number(item));
};
