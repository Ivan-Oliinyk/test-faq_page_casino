export type FaqItemType = { title: string; description: string };

export type IsLongType = (str?: string, strLength?: number) => boolean;

export type ToCutStringType = (str: string, strLength?: number) => string;

export type DataType = {
  id: number | string;
  title: string;
  description: string;
};

export type FaqBlockType = { showHeader?: boolean };

export type FaqHeaderType = { title: string; description: string };

export type SearchFormType = {
  text: string;
};
