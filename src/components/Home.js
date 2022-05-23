import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
import ExpensesSummary from "./ExpensesSummary";

function Home() {
  return (
    <div className="Home">
      <ExpensesSummary />
      <ExpenseListFilters />
      <ExpenseList />
      <div className="backdrop-circle">
      <div className="circle">
      </div>
      </div>
    </div>
  );
}

export default Home;
