export const getToday = () =>
  new Date().toLocaleDateString("en-US", { weekday: "short" });
export const getColor = (day) =>
  getToday().toLowerCase() === day ? "rgb(118,179,187)" : null;

export const total = (arr) => {
  return arr.reduce((acc, amount) => {
    return acc + amount.amount;
  }, 0);
};
