

export const useGetSize = (component) => {
  switch (component) {
    case "rowComponent":
      return 30;
    case "dateComponent":
      return 15;
    default:
      return 10;
  }
};
