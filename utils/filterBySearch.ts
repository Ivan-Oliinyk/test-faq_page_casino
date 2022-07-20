import { DataType } from "../types/faqBlockType";

type FilterBySearchType = (arr: DataType[], search: string) => DataType[];

export const filterBySearch: FilterBySearchType = (arr, search) =>
  arr.filter(
    (item) =>
      item.title && item.title!.concat(item!.description).includes(search)
  );
