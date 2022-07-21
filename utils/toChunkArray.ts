export const toChunkArray = <T>(data: Array<T>, col: number) =>
  data.reduce<T[] | any>((acc, _, idx) => {
    if (idx < col) {
      col === 1
        ? (acc = data)
        : (acc[idx] = data.filter((_, index) => !((index - idx) % col)));
    }

    return acc;
  }, []);
