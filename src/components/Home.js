import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
import ExpensesSummary from "./ExpensesSummary";
import Slider from './Slider'

function Home() {
  return (
    <div className="Home">
    <Slider />
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
