type FilterBySearchType = <T extends { title: string; description: string }>(
  arr: T[],
  search: string
) => T[];

export const filterBySearch: FilterBySearchType = (arr, search) => {
  return arr.filter(
    (item) =>
      item.title && item.title!.concat(item!.description).includes(search)
  );
};
