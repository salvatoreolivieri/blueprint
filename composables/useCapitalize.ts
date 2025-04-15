export const useCapitalize = (value: string) => {
  value = value.toLowerCase();
  return value[0].toUpperCase() + value.slice(1);
};
