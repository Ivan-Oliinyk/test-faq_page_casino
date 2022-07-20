export const toChunkArray = (data: Array<any>, col: number) =>
  data.reduce((acc, _, idx) => {
    if (idx < col) {
      col === 1
        ? (acc = data)
        : (acc[idx] = data.filter((_, index) => !((index - idx) % col)));
    }

    return acc;
  }, []);
