import React from "react";
import Expenses from "./Expenses";
import { GenerateDays } from "./Generator";
import * as myFn from "./Generator";
import { total } from "./Util";
export default function Bod() {
  const [dayState, setDayState] = React.useState(GenerateDays());

  function refresh() {
    setDayState(myFn.GenerateDays());
  }

  const elements = dayState.map((item) => {
    return (
      <Expenses
        key={item.day}
        days={item.day}
        amount={item.amount}
        color={item.color}
      />
    );
  });

  return (
    <div className="bod--main ">
      <div className="bod">
        <h2> Spending - Last 7 days </h2>
        <div className="week"> {elements} </div>
        <div className="underHr">
          Total this month
          <h1 className="total"> ${total(dayState).toFixed(2)}</h1>
        </div>
        <div className="perc">
          <h3>+2.4% </h3> <br /> from last month
        </div>
      </div>
      <button onClick={refresh}> Refresh </button>
    </div>
  );
}
