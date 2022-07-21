export const toCutString: (str: string, strLength?: number) => string = (
  str,
  strLength = 170
) => (str.length > strLength ? str.slice(0, strLength) + "..." : str);
