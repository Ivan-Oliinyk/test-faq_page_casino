export const generateColumnCount = (width: number = 0): number => {
  let column = 0;

  if (width! >= 1400) {
    column = 3;
  }

  if (width! <= 1399) {
    column = 2;
  }

  if (width! <= 991) {
    column = 1;
  }

  return column;
};
