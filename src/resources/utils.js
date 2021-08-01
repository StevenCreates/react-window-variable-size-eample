export const getComponentSize = (component) => {
  console.log(component)
  switch (component) {
    case "rowComponent":
      return 40;
    case "dateComponent":
      return 15;
    default:
      return 10;
  }
};
