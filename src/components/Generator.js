import { days } from "./Constants";
import { getColor } from "./Util";

export const GenerateDays = (newDays) => {
  return (newDays = days.map((d) => ({
    day: d,
    amount: Math.floor(Math.random() * 100),
    color: getColor(d)
  })));
};
