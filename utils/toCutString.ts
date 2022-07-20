import { ToCutStringType } from "../types/faqBlockType";

export const toCutString: ToCutStringType = (str, strLength = 170) =>
  str.length > strLength ? str.slice(0, strLength) + "..." : str;
