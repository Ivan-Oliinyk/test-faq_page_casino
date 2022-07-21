export const generateColumnCount = (width: number = 0): number => {
  let column = 0;

  if (width! >= 1400) {
    column = 3;
  }

  if (width! < 1400) {
    column = 2;
  }

  if (width! <= 992) {
    column = 1;
  }

  return column;
};
